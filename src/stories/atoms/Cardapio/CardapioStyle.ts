import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "49px",
      backgroundColor: "#F6F6F6",
      padding: "8px 12px",
    },
    cardapioText: {
      color: theme.palette.primary.main,
      fontWeight: 500,
      fontSize: "20px",
    },
  };
});

export default useStyles;
