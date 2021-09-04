import { containerFluid } from "./material-kit-react";

const carouselContainer = {
    ...containerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "90%",
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
        maxWidth: "90%",
    },
};

const carouselStyle = {
    section: {
        padding: "70px 0",
    },
    container: carouselContainer,
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important",
    },
};

export default carouselStyle;
