import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import useStyles from "./CardapioStyle";

import { CardapioProps } from "./Cardapio.types";
import Categories from "../../organisms/Categories/Categories";

const Cardapio = ({
  textCardapio,
  products,
  loading,
  addItem,
  removeItem,
  cart
}: CardapioProps) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Container className={classes.root}>
          <Typography variant="h6" className={classes.cardapioText}>
            {textCardapio ?? "Menu"}
          </Typography>
        </Container>
        <Categories
          products={products}
          loading={loading}
          addItem={addItem}
          removeItem={removeItem}
          cart={cart}
        />
      </div>
    </>
  );
};

export default Cardapio;
