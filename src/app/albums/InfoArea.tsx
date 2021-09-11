import React from 'react';
import infoStyle from "../../assets/tss/info-area";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

// @ts-ignore
const useStyles = makeStyles(infoStyle);

type InfoAreaProps = {
    title: string;
    description: string;
    iconColor: "primary" | "warning" | "danger" | "success" | "info" | "rose" | "gray";
    vertical: boolean;
    icon: any;
}

const InfoArea: React.FC<InfoAreaProps> = (props) => {
    const classes = useStyles();
    const { title, iconColor, description, vertical } = props;
    const iconWrapper = classNames({
        [classes.iconWrapper]: true,
        [classes[iconColor]]: true,
        [classes.iconWrapperVertical]: vertical,
    });
    const iconClasses = classNames({
        [classes.icon]: true,
        [classes.iconVertical]: vertical,
    });
    return (
        <div className={classes.infoArea}>
            <div className={iconWrapper}>
                <props.icon className={iconClasses}/>
            </div>
            <div className={classes.descriptionWrapper}>
                <h4 className={classes.title}>{title}</h4>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
};

export default InfoArea;