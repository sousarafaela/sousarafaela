import React from 'react';
import cardFooterStyle from "../../assets/tss/cardFooter";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(cardFooterStyle);

type CardFooterProps = {
    className?: any
}

const CardFooter: React.FC<CardFooterProps> = (props) => {
    const classes = useStyles();
    const { className, children, ...rest } = props;
    const cardFooterClasses = classNames({
        [classes.cardFooter]: true,
        [className]: className !== undefined,
    });
    return (
        <div className={cardFooterClasses} {...rest}>
            {children}
        </div>
    );
};

export default CardFooter;