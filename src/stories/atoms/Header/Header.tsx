import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./HeaderStyle";
import useHeaderData from "../../../hooks/useHeaderData";
// import { headerData } from '../../../hooks/useHeaderData';
import { CircularProgress } from "@material-ui/core";
import { HeaderDataProps } from "./Header.types";

const Header = ({
  dataHeader,
  loading
  }:HeaderDataProps) => {
  const classes = useStyles();

  return (
    loading ? 
      <CircularProgress /> : 
      <>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              {dataHeader.nome}
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    
  )
};

export default Header;
