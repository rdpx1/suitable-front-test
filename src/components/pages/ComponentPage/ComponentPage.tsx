import useStyles from "./ComponentPageStyle";

import Paper from "@material-ui/core/Paper";
import Header from "../../../stories/atoms/Header/Header";
import Footer from "../../../stories/atoms/Footer/Footer";
import Cardapio from "../../../stories/atoms/Cardapio/Cardapio";
import useCart from "../../../hooks/cart/useCart";
import useProduct from "../../../hooks/useProduct";
import useHeaderData from "../../../hooks/useHeaderData";

const ComponentPage = () => {
  const classes = useStyles();

  const { cart, totalProductQuantity, totalValue, addItem, removeItem, getProductQuantity} = useCart();
  const { productListFinal, loading } = useProduct();
  const { results } = useHeaderData();



  return (
    <>
      <Paper elevation={0} className={classes.root}>
        <Header dataHeader={results} />
        <Cardapio
          textCardapio="Cardápio"
          products={productListFinal}
          loading={loading}
          
          addItem={addItem}
          removeItem={removeItem}
          getProductQuantity={getProductQuantity}
        />
        <Footer
          totalProductQuantity={totalProductQuantity}
          totalValue={totalValue}
        />
      </Paper>
    </>
  );
};

export default ComponentPage;
