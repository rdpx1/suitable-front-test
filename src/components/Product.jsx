import React, { useState, useContext } from 'react';
import { AppContext } from '../context';
import { numberFormat } from '../numberFormat';

import Avatar from '@mui/material/Avatar';


import './Product.css'


const Product = ({ item }) => {

    const { cartItems, setCartItems, cartItemsValue, setCartItemsValue } = useContext(AppContext);

    const [productCounter, setProductCounter] = useState(0);

    const handleOperations = (operation, valorVenda) => {

        if (operation === 'add') {
            setProductCounter(productCount => productCount + 1);
            setCartItems(() => cartItems + 1);
            setCartItemsValue(() => cartItemsValue + valorVenda);
        } else {
            if (productCounter > 0) {
                setProductCounter(productCount => productCount - 1);
                setCartItems(() => cartItems - 1);
                setCartItemsValue(() => cartItemsValue - valorVenda);
            }
        }
    }
    return (
        <>
            <div className="product-container">

                <Avatar
                    alt={item.descricao}
                    src={item.url_imagem}
                    sx={{ width: 45, height: 45 }}
                />

                <div className="product-description">
                    <h3>{item.descricao}</h3>
                    <span className="product-text">{numberFormat(item.valor_venda)}</span>
                </div>
                <div className="buttons-holder">
                    <button className="button-product" onClick={() => handleOperations('add', item.valor_venda)}>+</button>
                    <span>
                        {productCounter}
                    </span>
                    <button className="button-product" onClick={() => handleOperations('sub', item.valor_venda)}>-</button>
                </div>
            </div>
        </>
    );
}

export default Product;