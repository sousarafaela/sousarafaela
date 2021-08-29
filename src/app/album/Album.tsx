import React, { useEffect, useState } from 'react';
import albumStyle from "../../assets/tss/album";
import { makeStyles } from "@material-ui/core";
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
import kay from '../../assets/images/kay.jpeg'
import { Link } from "react-router-dom";
import Button from '../molecules/Button';
import { Urls } from "../molecules/Constants";

// @ts-ignore
const useStyles = makeStyles(albumStyle);

export type AlbumImage = {
    fileName: string;
    description: string;
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
                        const mutableAlbumDetails = { ...albumDetails, [album]: details};
                        setAlbumDetails(mutableAlbumDetails);
                    })
            })
        }
    }, [albums])

    console.log('AlbumDetails', albumDetails);

    const canRenderAlbums = Object.keys(albumDetails).length > 0;

    const classes: any = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Lifestyle and Nature Photographer. Tallinn, Estonia</h2>
                        <h5 className={classes.description}>
                            I believe in finding connection, and am passionate about capturing these authentic, real moments
                            for you to remember forever. Memories of your most treasured day together with those you love.
                        </h5>
                    </GridItem>
                </GridContainer>
                {canRenderAlbums && Object.keys(albumDetails).map((album) => {
                    const albumContent = albumDetails[album];
                    return (
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <Link to={`/?page=photoBook&album=${album}`} className={classes.link}>
                                    <img
                                        src={`${Urls.home}/${album}/${albumContent.albumTitleImage}`}
                                        alt={albumContent.albumName}
                                        className={
                                            classes.imgRaised +
                                            " " +
                                            classes.imgRounded +
                                            " " +
                                            classes.imgFluid
                                        }
                                    />
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
    );
};

export default Album;