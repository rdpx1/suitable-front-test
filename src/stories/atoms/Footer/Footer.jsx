import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './FooterStyle';

const Footer = ({
  // totalProducts,
  // valueProducts
}) => {

    const classes = useStyles();

    return (
        <>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography 
              variant="h6" 
              className={classes.cartItems}
            >
              Carrinho(0)
            </Typography>
            <Typography 
              variant="h6" 
              className={classes.cartValue}
            >
              R$120,00
            </Typography>
          </Toolbar>
        </AppBar>
        </>
    );
}
 
export default Footer;