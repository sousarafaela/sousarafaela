import React from 'react';
import profilePageStyle from "../../assets/tss/profile-page";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import HeaderLinks from "../header/HeaderLinks";
import Header from "../header/Header";
import Parallax from "../molecules/Parallax";
import GridContainer from "../grid/GridContainer";
import rafaProfile from "../../assets/images/rafa-profile.png";
import GridItem from "../grid/GridItem";
import profileBg from "../../assets/images/profile-bg.jpg";
import Footer from "../footer/Footer";
import ReactGA from "react-ga";
import Facebook from "../header/Facebook";
import Insta from "../header/Insta";
import Twitter from "../header/Twitter";

// @ts-ignore
const useStyles = makeStyles(profilePageStyle);

type ProfilePageProps = {}
const ProfilePage: React.FC<ProfilePageProps> = (props) => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const classes: any = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
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
                small
                filter
                image={profileBg}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src={rafaProfile} alt="..." className={imageClasses}/>
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Rafaela Sousa</h3>
                                        <h6>Photographer</h6>
                                        <Facebook classes={classes}/>
                                        <Insta classes={classes}/>
                                        <Twitter classes={classes}/>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                I am an experienced Recruiter who enjoys being part of building innovative products that
                                add value to millions of customers. I enjoy working in autonomous teams that make their
                                own data-driven decisions.
                            </p>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ProfilePage;