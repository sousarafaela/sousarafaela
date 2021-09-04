import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import headerLinksStyle from "../../assets/tss/header-link";
import { Link } from "react-router-dom";

// @ts-ignore
const useStyles = makeStyles((theme) => headerLinksStyle(theme));


const HeaderLinks: React.FC = () => {
    const classes: any = useStyles();

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Link to="/?page=projects" className={classes.navLink}>
                    Projects
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/?page=services" className={classes.navLink}>
                    Services
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/?page=profile" className={classes.navLink}>
                    About me
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/?page=contact" className={classes.navLink}>
                    Contact
                </Link>
            </ListItem>
        </List>
    );
}

export default HeaderLinks;