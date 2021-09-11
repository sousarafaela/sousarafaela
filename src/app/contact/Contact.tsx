import React from 'react';
import { InputAdornment, makeStyles } from "@material-ui/core";
import contactStyle from "../../assets/tss/contact";
import GridContainer from "../grid/GridContainer";
import Card from "../molecules/Card";
import GridItem from "../grid/GridItem";
import Button from "../molecules/Button";
import CardBody from "../molecules/CardBody";
import CustomInput from "../molecules/CustomInput";
import { Email, People } from "@material-ui/icons";
import CardFooter from "../molecules/CardFooter";
import Header from "../header/Header";
import HeaderLinks from "../header/HeaderLinks";
import Parallax from "../molecules/Parallax";
import classNames from "classnames";
import CardHeader from '../molecules/CardHeader';

// @ts-ignore
const useStyles = makeStyles(contactStyle);

const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <Header
                color="transparent"
                brand="Rafaela Sousa"
                rightLinks={<HeaderLinks/>}
                changeColorOnScroll={{
                    height: 180,
                    color: "white",
                }}/>
            <Parallax
                extraSmall
                filter
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <Card className='card'>
                                    <form className={classes.form}>
                                        <CardHeader color="info" className={classes.cardHeader}>
                                            <h2>Contact Us</h2>
                                        </CardHeader>
                                        <CardBody>
                                            <CustomInput
                                                labelText="Full Name..."
                                                id="full"
                                                formControlProps={{
                                                    fullWidth: true,
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Email..."
                                                id="email"
                                                formControlProps={{
                                                    fullWidth: true,
                                                }}
                                                inputProps={{
                                                    type: "email",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Email className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </CardBody>
                                        <CardFooter className={classes.cardFooter}>
                                            <Button simple color="primary" size="lg">
                                                <>Send Inquiry</>
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;