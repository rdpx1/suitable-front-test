import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

import { numberFormat } from "../../../numberFormat";
import { FooterProps } from "./Footer.types";

import useStyles from "./FooterStyle";

const Footer = ({ totalProductQuantity, totalValue }: FooterProps) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.footerToolbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.cartItems}>
            Carrinho({totalProductQuantity})
          </Typography>
          <Button className={classes.cartValue}>
            {numberFormat(totalValue) ?? 0}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
