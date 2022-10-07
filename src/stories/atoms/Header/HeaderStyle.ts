import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "48px",
    },
    toolbar: {
      "&.MuiToolbar-regular": {
        minHeight: 0,
      },
      "&.MuiToolbar-gutters": {
        paddingLeft: "12px",
        paddingTop: "8px",
      },
    },
    title: {
      flexGrow: 1,
      fontSize: "20px",
    },
  };
});

export default useStyles;
