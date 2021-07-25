import React from 'react';
import Header from "../header/Header";
import Parallax from "../molecules/Parallax";
import landingPageStyle from "../../assets/tss/landing-page";
import { makeStyles } from "@material-ui/core";
import bg from "../../assets/images/rafa-bg.png";
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
import classNames from "classnames";
import Album from "../album/Album";
import HeaderLinks from "../header/HeaderLinks";
import Footer from "../footer/Footer";
import ReactGA from "react-ga";

// @ts-ignore
const useStyles = makeStyles(landingPageStyle);

const Landing: React.FC = (props) => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const classes = useStyles();
    return (
        <>
            <Header
                color="transparent"
                brand="Rafaela Sousa"
                rightLinks={<HeaderLinks/>}
                changeColorOnScroll={{
                    height: 400,
                    color: "white",
                }}/>
            <Parallax filter image={bg}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={6} sm={6} md={6}>
                            <h2 className={classes.title}>All photographs are accurate. None of them is the truth.</h2>
                            <br/>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <Album/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Landing;