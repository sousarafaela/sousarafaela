import React from 'react';
import ReactGA from "react-ga";
import { makeStyles } from "@material-ui/core";
import Header from "../header/Header";
import HeaderLinks from "../header/HeaderLinks";
import Parallax from "../molecules/Parallax";
import classNames from "classnames";
import Footer from "../footer/Footer";
import Albums from "../albums/Albums";
import projectsPageStyle from "../../assets/tss/projects-page";

// @ts-ignore
const useStyles = makeStyles(projectsPageStyle);

const Projects = () => {
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
                        <Albums/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Projects;