import { containerFluid, title } from "./material-kit-react";
import imagesStyles from "./images";


const albumStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center",
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
    },
    description: {
        color: "#999",
    },
    container: {
        ...containerFluid,
        maxWidth: "80%",
        textAlign: "center !important",
    },
    ...imagesStyles,
    link: {
        textDecoration: "none",
    },
};

export default albumStyle;
