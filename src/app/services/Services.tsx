import React from 'react';
import projectsPageStyle from "../../assets/tss/projects-page";
import { makeStyles } from "@material-ui/core";
import ReactGA from "react-ga";
import Header from "../header/Header";
import HeaderLinks from "../header/HeaderLinks";
import Parallax from "../molecules/Parallax";
import classNames from "classnames";
import Footer from "../footer/Footer";
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
import InfoArea from "../albums/InfoArea";
import pets from "../../assets/images/pets.jpg";
import maternity from "../../assets/images/maternity.jpg";

// @ts-ignore
const useStyles = makeStyles(projectsPageStyle);

const Pets: React.FC = () => {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div>
            <img src={pets} alt="..." className={imageClasses} style={{ width: '6rem', height: '6rem' }}/>
        </div>
    );
};

const Maternity: React.FC = () => {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div>
            <img src={maternity} alt="..." className={imageClasses} style={{ width: '6rem', height: '6rem' }}/>
        </div>
    );
};

const Services = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const classes = useStyles();

    return (
        <div>
            <Header
                color="transparent"
                brand="Rafaela Sousa"
                rightLinks={<HeaderLinks/>}
                changeColorOnScroll={{
                    height: 180,
                    color: "white",
                }}/>
            <Parallax
                extraSmall
                filter
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <div className={classes.section}>
                        <div>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <InfoArea
                                        vertical
                                        icon={Pets}
                                        title="Pets"
                                        iconColor="success"
                                        description="Whether you're in need of a styled shoot, look book, or a full-blown photo shoot with your pet, I want to collaborate with you! Pet sessions are easily one of my favorite things to document."
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <InfoArea
                                        vertical
                                        icon={Maternity}
                                        title="maternity"
                                        iconColor="danger"
                                        description="Don't let this crazy special moment in your life pass by without documenting it! Let's create images together that will take you right back in time to this joyous, exciting season."
                                    />
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Services;