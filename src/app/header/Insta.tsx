import React from 'react';
import ReactGA from "react-ga";
import Button from "../molecules/Button";

const Insta: React.FC<{ classes: any }> = ({ classes }) => {
    return (
        <Button
            color="transparent"
            href="https://www.instagram.com/"
            target="_blank"
            className={classes.navLink}
            onClick={(e) => {
                ReactGA.event({
                    category: 'Social Links',
                    action: 'Clicked Instagram'
                });
            }}
        >
            <i className={classes.socialIcons + " fab fa-instagram"}/>
        </Button>
    );
};

export default Insta;