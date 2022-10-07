import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    footerToolbar: {
      position: "fixed",
      flexGrow: 1,
      height: "48px",
      maxWidth: "500px",
      minHeight: "48px",
      '@media (min-width: 600px)': {
        "& .MuiToolbar-regular": {
        minHeight: "48px",
        padding: theme.spacing(1.25) + "px + 0px",
        },
        "& .MuiToolbar-gutters":{
          paddingLeft: theme.spacing(1.50),
        }
      },
      bottom: 0,
      borderRadius: `0px 0px ${theme.spacing(1.25)}px ${theme.spacing(1.25)}px`
    },
    cartItems: {
      flexGrow: 1,
      lineHeight: "32px",
    },
    cartValue: {
      width: "63px",
      color: "#FFF",
      padding: `13px 0px 13px ${theme.spacing(1)}px`
    },
  };
});

export default useStyles;
