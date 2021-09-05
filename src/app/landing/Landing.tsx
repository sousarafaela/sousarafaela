import React from 'react';
import Header from "../header/Header";
import landingPageStyle from "../../assets/tss/landing-page";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import Albums from "../albums/Albums";
import HeaderLinks from "../header/HeaderLinks";
import Footer from "../footer/Footer";
import ReactGA from "react-ga";
import MaterialCarousel from "../molecules/MaterialCarousel";
import Parallax from "../molecules/Parallax";
import GridItem from "../grid/GridItem";
import GridContainer from "../grid/GridContainer";

// @ts-ignore
const useStyles = makeStyles(landingPageStyle);

const Landing: React.FC = () => {
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
                <MaterialCarousel />
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8}>
                            <h2 className={classes.subTitle}>Dog Lover, Lifestyle and Nature Photographer</h2>
                            <h3 className={classes.description}>
                                I grew up in Algarve, Portugal, have been traveling across Europe for work and taking pictures
                                ever since childhood. I have a Bachelor’s degree from Instituto Universitário de Lisboa in
                                Psychology. I am currently based in Tallinn, Estonia and available for assignments across
                                Estonia and Baltics.
                            </h3>
                        </GridItem>
                    </GridContainer>
                </div>
                <Albums featured/>
            </div>
            <Footer/>
        </div>
    );
};

export default Landing;