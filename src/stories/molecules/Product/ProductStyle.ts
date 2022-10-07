import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  productContainer: {
    display: "flex",
    margin: theme.spacing(1) + "px 0",
    bordeRadius: theme.spacing(0.625),
    justifyContent: "space-between",
    color: "#000",
    width: "100%",
    alignItems: "center",
    height: theme.spacing(6),
    gap: theme.spacing(1.25),
  },
  buttonHolder: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.75),
    marginLeft: "auto",
  },
  productDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxHeight: "60px",
    fontSize: "16px",
  },
  buttons: {
    background: "rgba(0, 0, 0, 0.54)",
    borderRadius: "50%",
    color: "#eee",
    width: "20px",
    height: "20px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
