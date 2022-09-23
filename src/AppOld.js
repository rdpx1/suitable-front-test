import React, { useState } from "react";
import { AppContext } from './context';
import "@fontsource/plus-jakarta-sans";

import CompanyHeader from "./components/CompanyHeader";
import Categories from "./components/Categories";
import ProductsTotal from "./components/ProductsTotal";

import './App.css';

const App = () => {

  const [cartItems, setCartItems] = useState(0);
  const [cartItemsValue, setCartItemsValue] = useState(0);

  return (
    <>
      <AppContext.Provider
        value={{
          cartItems, setCartItems,
          cartItemsValue, setCartItemsValue
        }}
      >
        <div className="app-container">
          <div className="main">
            <div className="header-container">
              <CompanyHeader />
            </div>
            <div>
              <h2>Menu</h2>
            </div>
            <div className="container-body">
              <Categories />
            </div>
            <ProductsTotal />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;