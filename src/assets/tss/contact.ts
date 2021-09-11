import { container, title } from "./material-kit-react";

const contactStyle = {
    container: {
        zIndex: "12",
        color: "#FFFFFF",
        ...container,
    },
    section: {
        padding: "20px 0",
        textAlign: "center",
        maxHeight: "1600px",
        overflow: "hidden",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        margin: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none",
    },
    subtitle: {
        fontSize: "1.313rem",
        maxWidth: "500px",
        margin: "10px auto 0",
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
    },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    },
    form: {
        margin: "0",
    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "0.2rem 0",
        marginBottom: "15px",
    },
    socialIcons: {
        maxWidth: "24px",
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center",
    },
    cardFooter: {
        paddingTop: "0rem",
        border: "0",
        borderRadius: "6px",
        justifyContent: "center !important",
    },
    socialLine: {
        marginTop: "1rem",
        textAlign: "center",
        padding: "0",
    },
    inputIconsColor: {
        color: "#495057",
    },
};

export default contactStyle;
