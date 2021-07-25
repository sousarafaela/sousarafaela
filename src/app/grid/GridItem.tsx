import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";
import { GridProps } from "@material-ui/core/Grid/Grid";

const styles = {
    grid: {
        position: "relative",
        width: "100%",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        flexBasis: "auto",
    },
};

// @ts-ignore
const useStyles = makeStyles(styles);

type GridItemProps = {
    className?: string
}

const GridItem: React.FC<GridItemProps & Partial<GridProps>> = (props) => {
    const classes = useStyles();
    const { children, className = "", ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid + " " + className}>
            {children}
        </Grid>
    );
};

export default GridItem;