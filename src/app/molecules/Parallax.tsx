import React from 'react';
import parallaxStyle from "../../assets/tss/parallax";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

// @ts-ignore
const useStyles = makeStyles(parallaxStyle);

type ParallaxProps = {
    className?: string;
    filter?: boolean;
    style?: string;
    image?: string;
    small?: boolean;
}

const Parallax: React.FC<ParallaxProps> = (props) => {
    let windowScrollTop;
    if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3;
    } else {
        windowScrollTop = 0;
    }
    const [transform, setTransform] = React.useState(
        "translate3d(0," + windowScrollTop + "px,0)"
    );
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };
    const { filter, className, children, style, image, small } = props;
    const classes = useStyles();
    const parallaxClasses = classNames({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        "className": className !== undefined,
    });

    return (
        <div
            className={parallaxClasses}
            style={{
                // @ts-ignore
                ...style,
                backgroundImage: "url(" + image + ")",
                transform: transform,
            }}
        >
            {children}
        </div>
    );
};

export default Parallax;