import React from 'react';
import Header from "../header/Header";
import landingPageStyle from "../../assets/tss/landing-page";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import Album from "../album/Album";
import HeaderLinks from "../header/HeaderLinks";
import Footer from "../footer/Footer";
import ReactGA from "react-ga";
import MaterialCarousel from "../molecules/MaterialCarousel";
import Parallax from "../molecules/Parallax";

// @ts-ignore
const useStyles = makeStyles(landingPageStyle);

const Landing: React.FC = (props) => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const classes = useStyles();
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
            <Parallax
                extraSmall
                filter
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <MaterialCarousel />
                <Album/>
            </div>
            <Footer/>
        </div>
    );
};

export default Landing;