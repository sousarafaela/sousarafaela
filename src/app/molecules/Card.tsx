import React from 'react';
import classNames from "classnames";
import cardStyle from "../../assets/tss/card";
import { makeStyles } from "@material-ui/core";

type CardProps = {
    className: string;
    plain?: boolean;
    carousel?: boolean;
}

// @ts-ignore
const useStyles = makeStyles(cardStyle);

const Card: React.FC<CardProps> = (props) => {
    const classes = useStyles();
    const { className, children, plain, carousel, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [classes.cardPlain]: plain,
        [classes.cardCarousel]: carousel,
        [className]: className !== undefined,
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    );
};

export default Card;