import React from 'react';
import ReactGA from "react-ga";
import Button from "../molecules/Button";

const Twitter: React.FC<{ classes: any }> = ({ classes }) => {
    return (
        <Button
            href="https://twitter.com/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
            onClick={(e) => {
                ReactGA.event({
                    category: 'Social Links',
                    action: 'Clicked Twitter'
                });
            }}
        >
            <i className={classes.socialIcons + " fab fa-twitter"}/>
        </Button>
    );
};

export default Twitter;