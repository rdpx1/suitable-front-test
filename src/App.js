import React, { useState } from "react";

import CompanyHeader from "./components/CompanyHeader";
import Categories from "./components/Categories";

import './App.css';
import ProductsTotal from "./components/ProductsTotal";
import ProductList from "./components/ProductList";

const App = () => {

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //       const {data} = await axios.get(
  //         "https://demopizzaria.stbl.com.br/estoque/produtos_app/?format=json"
  //       )
  //   }
  //   fetchProducts();
  // }, [])


  return (
    <>
      <div className="container">
        <div className="header-container">
          <CompanyHeader />
        </div>
        <div className="container-body">
          <Categories />
        </div>
        <div className="container-test">
          <ProductList />
        </div>
        <div className="product-sum">
          <ProductsTotal />
        </div>
      </div>
    </>
  );
}

export default App;