import React, { ReactElement } from 'react';
import { AppBar, Button, Hidden, makeStyles, Toolbar } from "@material-ui/core";
import header from "../../assets/tss/header";
import logo from "../../assets/images/logo.png";
import classNames from "classnames";

// @ts-ignore
const useStyles = makeStyles(header);

export type Color =
    "primary" |
    "info" |
    "success" |
    "warning" |
    "danger" |
    "transparent" |
    "white" |
    "rose" |
    "dark";

type HeaderProps = {
    changeColorOnScroll: {
        color?: Color;
        height: number;
    };
    color?: Color;
    brand: string;
    rightLinks?: ReactElement;
}
const Header: React.FC<HeaderProps> = ({ changeColorOnScroll, color = "white", brand, rightLinks }) => {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const headerColorChange = () => {
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color || "white"]);
        } else {
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color || "white"]);
        }
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    React.useEffect(() => {
        if (changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });

    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: false,
        [classes.fixed]: true,
    });

    const brandComponent = <Button className={classes.title} href='/'>
        <img alt='logo' src={logo} style={{ maxWidth: '160px', maxHeight: '160px'}} />
    </Button>;

    return (
        <>
            <AppBar className={appBarClasses}>
                <Toolbar className={classes.container}>
                    {brandComponent}
                    <Hidden smDown implementation="css">
                        {rightLinks}
                    </Hidden>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;