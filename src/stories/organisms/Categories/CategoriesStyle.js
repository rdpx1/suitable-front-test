import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => {
  return {
   
    accordionDetails: {
      "&.Mui-expanded": {
        minHeight: 0,
        margin: 0,
      },
      "& .MuiAccordionSummary-content.Mui-expanded": {
        margin: 0,
      },
    },
    accordionTextDetails: {
      fontWeight: "bold",
      fontSize: "16px",
      margin: "0px",
    },
    productList: {
      padding: "0px 16px !important",
      "&.Mui-expanded": {
        minHeight: "72px",
        margin: "0",
      },
    },
  };
});
export default useStyles;
