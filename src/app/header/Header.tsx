import React, { ReactElement } from 'react';
import { AppBar, Button, Drawer, Hidden, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import header from "../../assets/tss/header";
import logo from "../../assets/images/logo.png";
import classNames from "classnames";
import { Menu } from "@material-ui/icons";

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
    leftLinks?: ReactElement;
}
const Header: React.FC<HeaderProps> = ({ changeColorOnScroll, color = "white", leftLinks, rightLinks }) => {
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

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const brandComponent = <Button className={classes.title} href='/'>
        <img alt='logo' src={logo} style={{ maxWidth: '160px', maxHeight: '160px'}} />
    </Button>;

    return (
        <>
            <AppBar className={appBarClasses}>
                <Toolbar className={classes.container}>
                    {leftLinks !== undefined ? brandComponent : null}
                    <div className={classes.flex}>
                        {leftLinks !== undefined ? (
                            <Hidden smDown implementation="css">
                                {leftLinks}
                            </Hidden>
                        ) : (
                            brandComponent
                        )}
                    </div>
                    <Hidden smDown implementation="css">
                        {rightLinks}
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="default"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                        >
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Toolbar>
                <Hidden mdUp implementation="js">
                    <Drawer
                        variant="temporary"
                        anchor={"right"}
                        open={mobileOpen}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        onClose={handleDrawerToggle}
                    >
                        <div className={classes.appResponsive}>
                            {leftLinks}
                            {rightLinks}
                        </div>
                    </Drawer>
                </Hidden>
            </AppBar>
        </>
    );
};

export default Header;