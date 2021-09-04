import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import headerLinksStyle from "../../assets/tss/header-link";
import Insta from "./Insta";
import Twitter from "./Twitter";
import Facebook from "./Facebook";

// @ts-ignore
const useStyles = makeStyles((theme) => headerLinksStyle(theme));


const HeaderLinks: React.FC = () => {
    const classes: any = useStyles();

    return (
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
    );
}

export default HeaderLinks;