import React from 'react';
import ReactGA from "react-ga";
import Button from "../molecules/Button";

const Facebook: React.FC<{ classes: any }> = ({ classes }) => {
    return (
        <Button
            color="transparent"
            href="https://www.facebook.com/"
            target="_blank"
            className={classes.navLink}
            onClick={() => {
                ReactGA.event({
                    category: 'Social Links',
                    action: 'Clicked Facebook'
                });
            }}
        >
            <i className={classes.socialIcons + " fab fa-facebook"} style={{ color: '#3b5998'}}/>
        </Button>
    );
};

export default Facebook;