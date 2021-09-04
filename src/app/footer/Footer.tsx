import React from 'react';
import { List, ListItem, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import Tooltip from "@material-ui/core/Tooltip";
import Facebook from "../header/Facebook";
import Insta from "../header/Insta";
import Twitter from "../header/Twitter";
import footerLinksStyle from "../../assets/tss/footer-link";

// @ts-ignore
const useStyles = makeStyles((theme) => footerLinksStyle(theme));

type FooterProps = {
    whiteFont?: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {
    const classes: any = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont,
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.listItem}>
                            <Tooltip
                                id="facebook"
                                title="Follow me on facebook"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{ tooltip: classes.tooltip }}
                            >
                                <Facebook classes={classes}/>
                            </Tooltip>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Tooltip
                                id="instagram"
                                title="Follow me on instagram"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{ tooltip: classes.tooltip }}
                            >
                                <Insta classes={classes}/>
                            </Tooltip>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Tooltip
                                id="twitter"
                                title="Follow me on twitter"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{ tooltip: classes.tooltip }}
                            >
                                <Twitter classes={classes}/>
                            </Tooltip>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    Copyrights &copy; Rafaela Sousa {new Date().getFullYear()} | All rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;