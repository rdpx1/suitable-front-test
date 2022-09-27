// import React, { useState, useContext } from 'react';
// import { AppContext } from '../../../context';

import ButtonAction from '../../atoms/ButtonAction/ButtonAction';
import { Typography } from '@material-ui/core';

import { numberFormat } from '../../../numberFormat';
import useStyles from './ProductStyle.js'
import useCartCounter from '../../../hooks/useCartCounter';

const Product = ( {item} ) => {

    const classes = useStyles();
    const {
        count, 
        value, 
        addItem, 
        removeItem
    } = useCartCounter();

    return (
        <>
            <div className={classes.productContainer}>
                <div>
                    <Typography 
                        variant="h6"
                        className={classes.productDescription}
                    >
                        {item.descricao}
                    </Typography>
                    <Typography 
                        variant="h6" 
                        className={classes.valueDescription}>
                            {numberFormat(item.valor_venda)}
                    </Typography>
                </div>
                <div className={classes.buttonHolder}>
                    <ButtonAction
                        type="add"
                        handleQuantityChange={addItem}
                    />
                    <Typography
                        className={classes.productDescription}
                        variant="h6"> {count}
                    </Typography>
                    <ButtonAction
                        type="remove"
                        handleQuantityChange={removeItem}
                    />
                </div>
            </div>

        </>
    );
}

export default Product;