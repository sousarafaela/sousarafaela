import { containerFluid, title } from "./material-kit-react";
import imagesStyles from "./images";

const albumStyle = (theme: any) => ({
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
        color: "#666565",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "16px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus": {
            color: "#000",
            background: "rgba(200, 200, 200, 0.2)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-start",
            },
        },
    },
    progressiveImageCaption:{
        paddingBottom: "35px",
        position: "absolute",
        left: "40%",
        bottom: "10px",
        zIndex: 10,
        paddingTop: "20px",
        color: "#ffffff",
        textAlign:"center",
    },
    progressiveImage:{

    }
});

export default albumStyle;
