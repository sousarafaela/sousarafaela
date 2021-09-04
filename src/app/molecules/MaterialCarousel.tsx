import React, { useCallback, useEffect, useState } from "react";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import GridItem from "../grid/GridItem";
import GridContainer from "../grid/GridContainer";
import carouselStyle from "../../assets/tss/carousel";
import { Urls } from "./Constants";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { Sleep } from "./Sleep";

const useStyles = makeStyles(theme => ({
    ...carouselStyle,
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}));

type CarouselFile = {
    file: string,
    description?: string
}

type CarouselDetails = {
    files: CarouselFile[]
}

const MaterialCarousel = () => {
    const [isLoadingCarouselDetails, setIsLoadingCarouselDetails] = useState(false);
    const [carouselDetails, setCarouselDetails] = useState<CarouselDetails | undefined>()

    const loadCarouselDetails = useCallback(async () => {
        try {
            await setIsLoadingCarouselDetails(true);
            const data = await fetch(`${Urls.home}/carousel.json`)
            await setCarouselDetails((await data.json()) as CarouselDetails)
            await Sleep(1000)
        } finally {
            await setIsLoadingCarouselDetails(false);
        }
    }, [])

    useEffect(() => {
        loadCarouselDetails();
    }, [loadCarouselDetails]);

    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <Backdrop className={classes.backdrop} open={isLoadingCarouselDetails}
                          onClick={() => {}}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
                        <Card className='card' carousel>
                            <Carousel {...settings}>
                                {carouselDetails && carouselDetails.files.map((carouselFile) => (
                                    <div key={carouselFile.file}>
                                        <img src={`${Urls.home}/carousel/${carouselFile.file}`}
                                             alt={carouselFile.file} className="slick-image"/>
                                        {carouselFile.description && (
                                            <div className="slick-caption">
                                                <h4>
                                                    {carouselFile.description}
                                                </h4>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
};

export default MaterialCarousel;
