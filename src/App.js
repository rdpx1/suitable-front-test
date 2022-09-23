// import { AppContext } from './context';
import "@fontsource/plus-jakarta-sans";

import Paper from '@material-ui/core/Paper';

import './App.css';
import Header from './stories/molecules/Header/Header'
import Footer from './stories/molecules/Footer/Footer'

import ButtonAction from './stories/molecules/ButtonAction/ButtonAction';

// import { useState } from "react";

const App = () => {

  // const [cartItems, setCartItems] = useState(0);
  // const [cartItemsValue, setCartItemsValue] = useState(0);

  // const classes = useStyles();

  return (
    <>
      <Paper>
        <div className="app-container">
          <Header />



            {/* <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Colocar o nome da empresa API
            </Typography>
          </Toolbar>
        </AppBar> */}
          {/* </div> */}

          <ButtonAction />
          <Footer/>
        </div>
      </Paper>
    </>
  );
}

export default App;