import React from 'react';
import albumStyle from "../../assets/tss/album";
import { makeStyles } from "@material-ui/core";
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
import kay from '../../assets/images/kay.jpeg'
import { Link } from "react-router-dom";
import Button from '../molecules/Button';

// @ts-ignore
const useStyles = makeStyles(albumStyle);

const Album = () => {
    const classes: any = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Lifestyle and Nature Photographer. Tallinn, Estonia</h2>
                        <h5 className={classes.description}>
                            I believe in finding connection, and am passionate about capturing these authentic, real moments
                            for you to remember forever. Memories of your most treasured day together with those you love.
                        </h5>
                    </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="/home?page=kay" className={classes.link}>
                            <img
                                src={kay}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluid
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                <>Kay's evening shoot</>
                            </Button>
                        </Link>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <Link to="/home?page=kay" className={classes.link}>
                            <img
                                src={kay}
                                alt="..."
                                className={
                                    classes.imgRaised +
                                    " " +
                                    classes.imgRounded +
                                    " " +
                                    classes.imgFluid
                                }
                            />
                            <Button color="primary" size="lg" simple>
                                <>Kay's evening shoot</>
                            </Button>
                        </Link>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
};

export default Album;