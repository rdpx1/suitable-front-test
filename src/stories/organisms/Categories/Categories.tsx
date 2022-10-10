import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";
import { Divider } from "@material-ui/core";

import { CardapioProps } from "../../atoms/Cardapio/Cardapio.types";
import { CategoriesProps } from "./Categories.types";
import { Product } from "../../../hooks/cart/useCart.types";

import Products from "../../molecules/Products/Products";

import useStyles from "./CategoriesStyle";

const Categories = ({
  products,
  loading,
  addItem,
  removeItem,
  cart
}: CardapioProps) => {
  const classes = useStyles();

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      {products.map((category: CategoriesProps, index: number) => {
        return (
          <div>
            <Accordion key={index} className={classes.accordionDetails}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.expandedIcon}
              >
                <Typography className={classes.accordionTextDetails}>
                  {category.descricao}
                </Typography>
              </AccordionSummary>
              {category.item.map((item: Product) => {
                return (
                  <AccordionDetails className={classes.productList}>
                    <Products
                      item={item}
                      key={item.id}
                      addItem={addItem}
                      removeItem={removeItem}
                      cart={cart}
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
