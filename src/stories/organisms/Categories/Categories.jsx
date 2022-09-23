import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Categories.css'
import Product from '../stories/atoms/Product.jsx';

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
  if (isRender) {
    return (
      <>
        {finalProducts.map((category, index) => {
          return (
            <Accordion
              key={index}
                // color: 'white',
                // background: '#222',
                // p: '0',
            >
              <AccordionSummary
                  // color: 'white',
                  // m: '8',
                expandIcon={
                  <ExpandMoreIcon
                      // color: 'white'
                  />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                    // fontFamily: "Plus Jakarta Sans",
                    // fontWeight: "bold"
                >
                  {category.descricao}
                </Typography>
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