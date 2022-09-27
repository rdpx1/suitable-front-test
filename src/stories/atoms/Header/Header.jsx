import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useStyles from './HeaderStyle';
import useHeaderData from '../../../hooks/useHeaderData';


const Header = () => {

    const classes = useStyles();
    const { data } = useHeaderData();


    return (  
        <>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Pizzaria Exemplo
            </Typography>
          </Toolbar>
        </AppBar>
        </>

    );
}
 
export default Header;