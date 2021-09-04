import React, { useCallback, useEffect, useState } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import photoBookPageStyle from "../../assets/tss/photo-book";
import ReactGA from "react-ga";
import classNames from "classnames";
import Header from "../header/Header";
import HeaderLinks from "../header/HeaderLinks";
import Parallax from "../molecules/Parallax";
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
import Footer from "../footer/Footer";
import { useQuery } from "../RoutingWrapper";
import { AlbumDetails } from "../album/Album";
import { Urls } from "../molecules/Constants";

// @ts-ignore
const useStyles = makeStyles(theme => ({
    ...photoBookPageStyle,
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const PhotoBook = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    let query = useQuery();
    const album = query.get("album");

    const [albumDetails, setAlbumDetails] = useState<AlbumDetails | undefined>();
    const [isLoadingAlbumDetails, setIsLoadingAlbumDetails] = useState<boolean>(false)

    const loadAlbumDetails = useCallback(async() => {
        try {
            await setIsLoadingAlbumDetails(true);
            const data = await fetch(`${Urls.home}/${album}/album.json`)
            await setAlbumDetails((await data.json()) as AlbumDetails)
        } finally {
            await setIsLoadingAlbumDetails(false);
        }
    }, [album])

    useEffect(() => {
        if (album && album.trim().length > 0) {
            loadAlbumDetails();
        }
    }, [album, loadAlbumDetails]);

    // @ts-ignore
    const classes: any = useStyles();

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Backdrop className={classes.backdrop} open={isLoadingAlbumDetails} onClick={() => setIsLoadingAlbumDetails(false)}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Header
                color="transparent"
                brand="Rafaela Sousa"
                rightLinks={<HeaderLinks/>}
                changeColorOnScroll={{
                    height: 180,
                    color: "white",
                }}/>
            <Parallax extraSmall filter />
            {albumDetails && (
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className={classes.profile}>
                                        <h2 className={classes.title}>{albumDetails.albumName}</h2>
                                        <br/>
                                    </div>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                    <div>
                        <Gallery photos={
                            albumDetails.albumImages
                                .map((albumImage) => ({
                                    source: `${Urls.home}/${album}/${albumImage.file}`,
                                    caption: albumImage.description,
                                    alt: albumImage.alt || '',
                                    width: albumImage.width || 4,
                                    height: albumImage.height || 3
                                }))
                                .map((photo) => ({ ...photo, src: photo.source, }))} onClick={openLightbox}/>
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={albumDetails.albumImages
                                            .map((albumImage) => ({
                                                source: `${Urls.home}/${album}/${albumImage.file}`,
                                                caption: albumImage.description,
                                                alt: albumImage.alt || '',
                                                width: albumImage.width || 4,
                                                height: albumImage.height || 3
                                            }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default PhotoBook;