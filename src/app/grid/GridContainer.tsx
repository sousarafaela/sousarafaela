import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";
import { GridProps } from "@material-ui/core/Grid/Grid";

const styles = {
    grid: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "auto",
    },
};

const useStyles = makeStyles(styles);

type GridContainerProps = {
    className?: string
}

const GridContainer: React.FC<GridContainerProps & Partial<GridProps>> = (props) => {
    const classes = useStyles();
    const { children, className = "", ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid + " " + className}>
            {children}
        </Grid>
    );
};

export default GridContainer;