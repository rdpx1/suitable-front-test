import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({  
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
      padding: "0px 26px 8px 16px !important",
      "&.Mui-expanded": {
        minHeight: "72px",
        margin: "0",
      },
    },
    expandedIcon: {
      "& .MuiIconButton-edgeEnd":{
        marginRight: theme.spacing(-0.25)
      },
    },
  }));

export default useStyles;
