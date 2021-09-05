import React, { useEffect, useState } from 'react';
import albumStyle from "../../assets/tss/album";
import { makeStyles } from "@material-ui/core";
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
import { Link } from "react-router-dom";
import { Urls } from "../molecules/Constants";
import ProgressiveImage from 'react-progressive-image';

// @ts-ignore
const useStyles = makeStyles((theme) => albumStyle(theme));

export type AlbumImage = {
    file: string;
    description: string;
    alt?: string;
    width?: number;
    height?: number;
}

export type AlbumDetails = {
    albumName: string;
    albumTitleImage: string;
    albumImages: AlbumImage[];
}

type AlbumsProps = {
    featured?: boolean
}

const Albums: React.FC<AlbumsProps> = ({ featured }) => {
    const [albums, setAlbums] = useState<string[]>([]);
    const [albumDetails, setAlbumDetails] = useState<Record<string, AlbumDetails>>({})

    useEffect(() => {
        const url = featured ? `${Urls.home}/featured-albums.json` : `${Urls.home}/albums.json`;
        fetch(url)
            .then(res => res.json())
            .then((data) => setAlbums(data.albums))
            .catch((e) => console.error('error loading albums', e))
    }, [])

    useEffect(() => {
        if (albums.length > 0) {
            albums.forEach((album) => {
                if (!albumDetails[album]) {
                    fetch(`${Urls.home}/${album}/album.json`)
                        .then((res) => res.json())
                        .then((details: AlbumDetails) => {
                            const mutableAlbumDetails = { ...albumDetails, [album]: details };
                            setAlbumDetails(mutableAlbumDetails);
                        })
                }
            })
        }
    }, [albums, albumDetails])

    const canRenderAlbums = Object.keys(albumDetails).length > 0;

    const classes: any = useStyles();
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{featured ? 'Featured Projects' : 'Projects'}</h2>
            {canRenderAlbums && Object.keys(albumDetails).map((album) => {
                const albumContent = albumDetails[album];
                return (
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={6}>
                            <Link to={`/?page=photoBook&album=${album}`} className={classes.link}>
                                <div className={classes.progressiveImage}>
                                    <ProgressiveImage
                                        src={`${Urls.home}/${album}/${albumContent.albumTitleImage}`}
                                        placeholder={`${Urls.home}/loader.svg`}>
                                        {(src: string, loading: boolean) => (
                                            <img
                                                src={src}
                                                alt={albumContent.albumName}
                                                className={
                                                    classes.imgRaised +
                                                    " " +
                                                    classes.imgRounded +
                                                    " " +
                                                    classes.imgFluid
                                                }
                                                style={{ opacity: loading ? 0.5 : 1 }}
                                            />
                                        )}
                                    </ProgressiveImage>
                                </div>
                                <div className={classes.progressiveImageCaption}>
                                    {albumContent.albumName}
                                </div>
                            </Link>
                        </GridItem>
                    </GridContainer>
                )
            })}
        </div>
    );
};

export default Albums;