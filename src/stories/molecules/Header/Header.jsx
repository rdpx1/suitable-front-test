import React from 'react';



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './HeaderStyle';



const Header = () => {

    const classes = useStyles();

    return (  
        <>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Colocar o nome da empresa API
            </Typography>
          </Toolbar>
        </AppBar>
        </>

    );
}
 
export default Header;