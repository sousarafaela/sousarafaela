import React from 'react';
import cardHeaderStyle from "../../assets/tss/cardHeader";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(cardHeaderStyle);

type CardHeaderProps = {
    className?: any
    color: "warning"| "success"| "danger"| "info"| "primary"
    plain?: any
}
const CardHeader: React.FC<CardHeaderProps> = (props) => {
    const classes = useStyles();
    const { className, children, color, plain, ...rest } = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        // @ts-ignore
        [classes[`${color}CardHeader` ]]: color,
        [classes.cardHeaderPlain]: plain,
        [className]: className !== undefined,
    });
    return (
        <div className={cardHeaderClasses} {...rest}>
            {children}
        </div>
    );
};

export default CardHeader;