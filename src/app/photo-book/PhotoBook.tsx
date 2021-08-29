import React, { useCallback, useState } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { makeStyles } from "@material-ui/core";
import { photos } from "./Photos";
import photoBookPageStyle from "../../assets/tss/photo-book";
import ReactGA from "react-ga";
import classNames from "classnames";
import Header from "../header/Header";
import HeaderLinks from "../header/HeaderLinks";
import Parallax from "../molecules/Parallax";
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
import Footer from "../footer/Footer";

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
}));

const PhotoBook = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    // @ts-ignore
    const classes: any = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Header
                color="transparent"
                brand="Rafaela Sousa"
                rightLinks={<HeaderLinks/>}
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}/>
            <Parallax extraSmall filter />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <h2 className={classes.title}>Kay's Day Out in Tallinn</h2>
                                    <br/>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
                <div>
                    <Gallery photos={photos.map((photo) => ({ ...photo, src: photo.source, }))} onClick={openLightbox}/>
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        source: x.source,
                                        caption: x.caption
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PhotoBook;