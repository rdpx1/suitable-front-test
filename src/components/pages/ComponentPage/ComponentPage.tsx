import useStyles from './ComponentPageStyle';

import Paper from '@material-ui/core/Paper';
import Header from '../../../stories/atoms/Header/Header';
import Footer from '../../../stories/atoms/Footer/Footer';
import Cardapio from '../../../stories/atoms/Cardapio/Cardapio';
import Categories from '../../../stories/organisms/Categories/Categories';
import useCart from '../../../hooks/useCart';
import useProduct from '../../../hooks/useProduct';
import useHeaderData from '../../../hooks/useHeaderData';

const ComponentPage = (

) => {

    const classes = useStyles();

    const {
        totalProductQuantity,
        totalValue,
        addItem,
        removeItem,
    } = useCart();

    const {
        productListFinal,
        loading
    } = useProduct();

    const {
        results,
        isValidating
    } = useHeaderData()

    return (
        <>
            <Paper elevation={0} className={classes.root}>
                <Header
                    dataHeader={results}
                    loading={isValidating}
                />
                <Cardapio
                    text="Cardápio"
                />
                <Categories
                    products={productListFinal}
                    loading={loading}
                    addItem={addItem}
                    removeItem={removeItem}
                />
                <Footer
                    totalProductQuantity={totalProductQuantity}
                    totalValue={totalValue}
                />
            </Paper>
        </>
    );
}

export default ComponentPage;
