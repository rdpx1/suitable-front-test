import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

import useStyles from './CategoriesStyle'
import Product from '../../molecules/Product/Product';


const Categories = ({ products, addItem, removeItem }) => {

  const classes = useStyles();

    return (
      <>
        {products.map((category, index) => {
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
                  //Acessar o cart pra pegar a informação da quantidade daquele produto;
                  <AccordionDetails className={classes.productList}>
                    <Product
                      item={item}
                      key={i}
                      addItem={addItem}
                      removeItem={removeItem}
                    />
                  </AccordionDetails>
                )
              })}
            </Accordion>
          )
        })}
      </>
    );
}

export default Categories;