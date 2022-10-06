import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => {
    return {
        root: {
            position: "fixed",
            flexGrow: 1,
            backgroundColor: "#00A17C",
            height: "48px",
            bottom: "0",
            maxWidth: "500px"
        },
        cartItems: {
            flexGrow: 1,
            fontSize: "20px",
            lineHeight: "32px",
            padding: "8px 12px",
            top: "10px",
        },
        cartValue: {
            fontSize: "13px",
            padding: "8px 12px",
            top: "10px",
        },
    };
})

export default useStyles;