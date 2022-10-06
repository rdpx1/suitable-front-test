import React from "react";
import { numberFormat } from "../../../numberFormat";
import useStyles from "./ProductStyle.js";

import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ProductProps } from "./Product.types";

const Product = ({
  item,
  addItem,
  removeItem,
}: ProductProps) => {

  const classes = useStyles();

  return (
    <>
      <div className={classes.productContainer}>
        <div>
          <Typography variant="h6" className={classes.productDescription}>
            {item.descricao}
          </Typography>
          <Typography variant="h6" className={classes.valueDescription}>
            {numberFormat(item.valor_venda)}
          </Typography>
        </div>
        <div className={classes.buttonHolder}>
          <IconButton
            className={classes.buttons}
            onClick={() => addItem(item)}
          >
            <AddIcon/>
          </IconButton>
              
          <Typography className={classes.productDescription} variant="h6">
            {item.quantity ? item.valor_venda * item.quantity : 0}
          </Typography>

          <IconButton
            className={classes.buttons}
            onClick={() => removeItem(item)}
          >
            <RemoveIcon/>
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default Product;
