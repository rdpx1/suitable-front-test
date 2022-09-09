import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import './Categories.css'
import Product from './Product.jsx';

axios.defaults.baseURL = 'https://demopizzaria.stbl.com.br/estoque/';

const Categories = () => {

  const finalCategories = [];
  const [isRender, setIsRender] = useState(false);
  const [finalProducts, setFinalProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const [category, product] = await Promise.all([
        axios.get('/categorias_app/?format=json'),
        axios.get('/produtos_app/?format=json')
      ]);

      handlingData(category.data.results, product.data.results);
      
    }
    getData();

  }, []);

  const handlingData = (categories, products) => {

    for (let index = 0; index < categories.length; index++) {
      finalCategories.push(categories[index]);
      finalCategories[index].items = [];

      for (let i = 0; i < products.length; i++) {
        if (products[i].categoria_id === finalCategories[index].id && products[i].valor_venda > 0) {
          finalCategories[index].items.push(products[i]);
        }
      }
    }
    setFinalProducts(finalCategories);
    setIsRender(true);
  }

  console.log(isRender, finalProducts);
  if (isRender) {
    return (
      <>
        {finalProducts.map((category, index) => {
          return (
            <Accordion
              key={index}
              sx={{
                color: 'white',
                background: '#222',
                p: '0',
              }}
            >
              <AccordionSummary
                sx={{
                  color: 'white'
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: 'white'
                    }}
                  />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{category.descricao}</Typography>
              </AccordionSummary>
                {category.items.map((item, i) => {
                  return (
                    <Product
                      item={item}
                      key={i}
                    />
                  )
                })}
            </Accordion>
          )
        })}
      </>
    );
  } else {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

}

export default Categories;