import { createTheme } from "@material-ui/core";

const theme = createTheme({
    typography:{
        h2:{
            color: "#00216d",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase"
        },
        h4:{
            fontSize: "2rem",
            letterSpacing: "3px",
            fontWeight: 600,
            color: "#0088a8",
            textTransform: "uppercase"
        },
        h5:{
            fontSize: "1.5rem",
            textTransform: "uppercase"
        },
        h6:{
            letterSpacing: "3px",
            marginTop: "1.3rem",
            marginBottom: "0.5rem",
            color: "#0088a8",
            fontWeight: 600,
            textTransform: "uppercase"
        },
        body1:{
            color:"#d3d3d3",
            fontSize: "0.9rem", 
            letterSpacing: "1px"
        },
        body2:{
            letterSpacing: "3px",
            color: "#0088a8",
            fontWeight: 600,
            textTransform: "uppercase"
        },
        subtitle1: {
            color: "#484848",
            fontWeight: "bold"
        },
        subtitle2:{
            color: "#656565",
            fontWeight: "bold"
        },
        caption:{
            fontSize: "0.8rem",
            color: "#434343"
        }
    }
})

export default theme;