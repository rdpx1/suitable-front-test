

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from 'axios';


import Categories from "./components/Categories";

import './App.css';

const App = () => {
  const [teste, setTeste] = useState('');
  const [categories, setCategories] = useState('');


  /*
 * Backend tags list have changed add the changes if needed
 */
  useEffect(() => {
    const fetchCategories = async () => {
        const {data} = await axios.get(
            "https://demopizzaria.stbl.com.br/estoque/categorias_app/?format=json"
        )
    }
  
    fetchCategories();
  }, [])

  useEffect(() => {
    const fetchCompanyData = async () => {
        const {data} = await axios.get(
          "https://demopizzaria.stbl.com.br/core/empresa_personal_app/?format=json"
        )
    }
  
    fetchCompanyData();
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
        const {data} = await axios.get(
          "https://demopizzaria.stbl.com.br/estoque/produtos_app/?format=json"
        )
    }
    fetchProducts();
  }, [])


  return (
    <>
      <div className="container">
          <Categories />
      </div>
    </>
  );
}

export default App;