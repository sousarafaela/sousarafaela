import { containerFluid } from "./material-kit-react";

const carouselContainer = {
    ...containerFluid,
    "@media (min-width: 300px)": {
        maxWidth: "95%",
    },
    "@media (min-width: 576px)": {
        maxWidth: "95%",
    },
    "@media (min-width: 768px)": {
        maxWidth: "95%",
    },
    "@media (min-width: 992px)": {
        maxWidth: "95%",
    },
    "@media (min-width: 1200px)": {
        maxWidth: "95%",
    },
};

const carouselStyle = {
    section: {
        padding: "20px 0",
    },
    container: carouselContainer,
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important",
    },
};

export default carouselStyle;
