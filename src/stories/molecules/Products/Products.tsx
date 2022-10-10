import React from "react";
import { useEffect } from "react";
import { numberFormat } from "../../../numberFormat";
import useStyles from "./ProductsStyle";

import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { ProductItemProps } from "./Products.types";
import { products } from "../../../lib/paths";

const Products = ({
  item,
  addItem,
  removeItem,
  // getProductQuantity,
  cart,
}: ProductItemProps) => {
  const classes = useStyles();

  const itemCart = cart.find((product) => product.id === item.id);

  return (
    <>
      <div className={classes.productContainer}>
        <div>
          <Typography variant="subtitle1">{item.descricao}</Typography>
          <Typography variant="caption">
            {numberFormat(item.valor_venda)}
          </Typography>
        </div>
        <div className={classes.buttonHolder}>
          <IconButton className={classes.buttons} onClick={() => addItem(item)}>
            <AddIcon />
          </IconButton>

          <Typography className={classes.productDescription} variant="h6">
            {itemCart?.quantity ?? 0}
          </Typography>

          <IconButton
            className={classes.buttons}
            onClick={() => removeItem(item)}
          >
            <RemoveIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Products;
