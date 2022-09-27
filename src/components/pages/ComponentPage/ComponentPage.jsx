import React from 'react';
import useStyles from './ComponentPageStyle';

import Paper from '@material-ui/core/Paper';
import Header from '../../../stories/atoms/Header/Header';
import Footer from '../../../stories/atoms/Footer/Footer';
import Cardapio from '../../../stories/atoms/Cardapio/Cardapio';
import Categories from '../../../stories/organisms/Categories/Categories';
import { useState } from 'react';
// import useCartCounter from '../../../hooks/useCartCounter';
// import { ProductContext } from '../../../context';

const ComponentPage = (
    
) => {

    const classes = useStyles();

    return (
        <>
            <Paper elevation={0} className={classes.root}>
                <Header />
                <Cardapio
                    text="Cardápio"
                />
                {/* <ProductContext.Provider> */}
                <Categories 
                    // countTotalItems={countTotalItems}
                />
                <Footer 
                    // countTotalItems={countTotalItems}
                />
                {/* </ProductContext.Provider> */}
            </Paper>
        </>
    );
}

export default ComponentPage;
