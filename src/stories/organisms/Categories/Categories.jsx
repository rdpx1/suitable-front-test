import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './CategoriesStyle'
import Product from '../../molecules/Product/Product';
import { AccordionDetails } from '@material-ui/core';

axios.defaults.baseURL = 'https://demopizzaria.stbl.com.br/estoque/';

const Categories = ({ countTotalItems }) => {

  const classes = useStyles();

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

    console.log("chamei aqui");
  }, []);

  const handlingData = (categories, products) => {


    categories.map((category, index) => {

      category.items =
        products.filter(product =>
          product.categoria_id === category.id
          &&
          product.valor_venda > 0
        );
    })

    setFinalProducts(categories);
    setIsRender(true);
  }
  if (isRender) {
    return (
      <>
        {finalProducts.map((category, index) => {
          return (
            <Accordion
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                  />}
              >
                <Typography
                  className={classes.accordionTextDetails}
                >
                  {category.descricao}
                </Typography>
              </AccordionSummary>
              {category.items.map((item, i) => {
                return (
                  <AccordionDetails className={classes.productList}>
                    <Product
                      item={item}
                      key={i}
                      countTotalItems={countTotalItems}

                    />
                  </AccordionDetails>
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