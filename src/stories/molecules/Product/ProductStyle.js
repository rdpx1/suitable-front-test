import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {

        productContainer: {
            display: "flex",
            margin: "8px 0",
            padding: "0px 15px",
            bordeRadius: "5px",
            justifyContent: "space-between",
            color: "#000",
            width: "100%",
            alignItems: "center",
            height: "48px",
            gap: "10px",
        },
        buttonHolder: {
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginLeft: "auto",
        },
        productDescription: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxHeight: "60px",
            fontSize: "16px",
        },
        valueDescription:{
            fontSize: "0.8rem",
            fontWeight: "400",

        }
    }

});

export default useStyles;
