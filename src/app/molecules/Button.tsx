import React, { MouseEventHandler, ReactElement } from "react";
import classNames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import buttonStyle from "../../assets/tss/button";

// @ts-ignore
const makeComponentStyles = makeStyles(() => ({ ...buttonStyle }));

type RegularButtonProps = {
    color?: "primary" |
        "info" |
        "success" |
        "warning" |
        "danger" |
        "rose" |
        "white" |
        "facebook" |
        "twitter" |
        "google" |
        "github" |
        "transparent";
    size?: "sm" | "lg";
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    children: ReactElement;
    target?: string;
    round?: boolean;
    simple?: boolean;
    block?: boolean;
    link?: boolean;
    justIcon?: boolean;
    href?: string;
    onClick?: MouseEventHandler<any> | undefined;
}

const RegularButton = React.forwardRef<any, RegularButtonProps>((props, ref) => {
    const {
        color = "primary",
        round,
        children,
        fullWidth,
        disabled,
        simple,
        size = "sm",
        block,
        link,
        justIcon,
        className,
        onClick,
        ...rest
    } = props;

    const classes = makeComponentStyles();


    const btnClasses = classNames({
        [classes.button]: true,
        // @ts-ignore
        [classes[size]]: size,
        // @ts-ignore
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        // @ts-ignore
        [className]: className,
    });

    // @ts-ignore
    return (<Button {...rest} onClick={onClick} ref={ref} className={btnClasses}>{children}</Button>);
});


export default RegularButton;
