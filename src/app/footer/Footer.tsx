import React from 'react';
import footerStyle from "../../assets/tss/footer";
import { List, ListItem, makeStyles } from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";

// @ts-ignore
const useStyles = makeStyles(footerStyle);

type FooterProps = {
    whiteFont?: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont,
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont,
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://www.linkedin.com/in/rafaela-de-sousa-0517bbaa/?originalSubdomain=ee"
                                className={classes.block}
                                target="_blank"
                            >
                                Rafaela Sousa
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <Link to="/profile" className={classes.block}>
                                About me
                            </Link>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    &copy; {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;