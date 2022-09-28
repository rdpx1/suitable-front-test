import React from 'react';
import useStyles from './ComponentPageStyle';

import Paper from '@material-ui/core/Paper';
import Header from '../../../stories/atoms/Header/Header';
import Footer from '../../../stories/atoms/Footer/Footer';
import Cardapio from '../../../stories/atoms/Cardapio/Cardapio';
import Categories from '../../../stories/organisms/Categories/Categories';
import { useState } from 'react';
import useCart from '../../../hooks/useCart';
import useProduct from '../../../hooks/useProduct';


const ComponentPage = (

) => {

    const classes = useStyles();
    
    const {
        cart,
        count,
        totalValue,
        addItem,
        removeItem
    } = useCart();

    // const {
    //     products
    // } = useProduct();


    return (
        <>
            <Paper elevation={0} className={classes.root}>
                <Header />
                <Cardapio
                    text="Cardápio"
                />
                {/* <Categories
                    products={products}
                    addItem={addItem}
                    removeItem={removeItem}
                /> */}
                {/* <Footer
                    productQuantity={count}
                    productsTotalValue={totalValue}
                /> */}
            </Paper>
        </>
    );
}

export default ComponentPage;
