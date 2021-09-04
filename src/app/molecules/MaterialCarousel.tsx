import React, { useCallback, useEffect, useState } from "react";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card";
import GridItem from "../grid/GridItem";
import GridContainer from "../grid/GridContainer";
import carouselStyle from "../../assets/tss/carousel";
import { Urls } from "./Constants";

const useStyles = makeStyles(carouselStyle);

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

    const loadCarouselDetails = useCallback(async() => {
        try {
            await setIsLoadingCarouselDetails(true);
            const data = await fetch(`${Urls.home}/carousel.json`)
            await setCarouselDetails((await data.json()) as CarouselDetails)
        } finally {
            await setIsLoadingCarouselDetails(false);
        }
    }, [])

    useEffect(() => {
        loadCarouselDetails();
    }, []);

    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
    };

    if (carouselDetails && carouselDetails.files.length > 0) {
        return (
            <div className={classes.section}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
                            <Card className='card' carousel>
                                <Carousel {...settings}>
                                    {carouselDetails.files.map((carouselFile) => (
                                        <div key={carouselFile.file}>
                                            <img src={`${Urls.home}/carousel/${carouselFile.file}`} alt={carouselFile.file} className="slick-image" />
                                            <div className="slick-caption">
                                                <h4>
                                                    {carouselFile.description || carouselFile.file}
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }

    return <></>
};

export default MaterialCarousel;
