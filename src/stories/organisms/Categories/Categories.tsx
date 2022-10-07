import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Container } from "@material-ui/core";

import { CategoriesProps } from "./Categories.types";
import Product from "../../molecules/Product/Product";

import useStyles from "./CategoriesStyle";

const Categories = ({
  products,
  loading,
  addItem,
  removeItem,
}: CategoriesProps) => {
  const classes = useStyles();

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      {products.map((category: any, index: number) => {
        return (
          <div>
          <Accordion 
            key={index} 
            className={classes.accordionDetails}
          >
            <AccordionSummary 
              expandIcon={<ExpandMoreIcon />}
              className={classes.expandedIcon}
            >
              <Typography 
                className={classes.accordionTextDetails}
              >
                {category.descricao}
              </Typography>
            </AccordionSummary>
            {category.item.map((item: any) => {
              return (
                <AccordionDetails className={classes.productList}>
                  <Product
                    item={item}
                    key={item.id}
                    addItem={addItem}
                    removeItem={removeItem}
                  />
                </AccordionDetails>
              );
            })}
            <Divider />
          </Accordion>
          </div>
        );
      })}
    </>
  );
};

export default Categories;
