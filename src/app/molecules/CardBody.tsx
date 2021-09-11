import React from 'react';
import cardBodyStyle from "../../assets/tss/cardBody";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(cardBodyStyle);

type CardBodyProps = {
    className?: any
}

const CardBody: React.FC<CardBodyProps> = (props) => {
    const classes = useStyles();
    const { className, children, ...rest } = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [className]: className !== undefined,
    });
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    );
};

export default CardBody;