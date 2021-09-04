import React, { useEffect, useState } from 'react';
import albumStyle from "../../assets/tss/album";
import { makeStyles } from "@material-ui/core";
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
import { Link } from "react-router-dom";
import Button from '../molecules/Button';
import { Urls } from "../molecules/Constants";
import ProgressiveImage from 'react-progressive-image';

// @ts-ignore
const useStyles = makeStyles(albumStyle);

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

const Album = () => {
    const [albums, setAlbums] = useState<string[]>([]);
    const [albumDetails, setAlbumDetails] = useState<Record<string, AlbumDetails>>({})

    useEffect(() => {
        fetch(`${Urls.home}/albums.json`)
            .then(res => res.json())
            .then((data) => {
                setAlbums(data.albums)
            })
            .catch((e) => {
                console.error('error loading albums', e)
            })
    }, [])

    useEffect(() => {
        if (albums.length > 0) {
            albums.forEach((album) => {
                fetch(`${Urls.home}/${album}/album.json`)
                    .then((res) => res.json())
                    .then((details: AlbumDetails) => {
                        const mutableAlbumDetails = { ...albumDetails, [album]: details };
                        setAlbumDetails(mutableAlbumDetails);
                    })
            })
        }
    }, [albums, albumDetails])

    const canRenderAlbums = Object.keys(albumDetails).length > 0;

    const classes: any = useStyles();
    return (
        <div className={classes.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Dog Lover, Lifestyle and Nature Photographer</h2>
                    <h3 className={classes.description}>
                        I grew up in Algarve, Portugal, have been traveling across Europe for work and taking pictures
                        ever since childhood. I have a Bachelor’s degree from Instituto Universitário de Lisboa in
                        Psychology. I am currently based in Tallinn, Estonia and available for assignments across
                        Estonia and Baltics.
                    </h3>
                </GridItem>
            </GridContainer>
            <div className={classes.section}>
                <div className={classes.container}>
                    <h2 className={classes.title}>Featured Projects</h2>
                    {canRenderAlbums && Object.keys(albumDetails).map((album) => {
                        const albumContent = albumDetails[album];
                        return (
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <Link to={`/?page=photoBook&album=${album}`} className={classes.link}>
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
                                        <Button color="primary" size="lg" simple>
                                            <>{albumContent.albumName}</>
                                        </Button>
                                    </Link>
                                </GridItem>
                            </GridContainer>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Album;