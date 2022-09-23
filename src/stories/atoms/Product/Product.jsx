// import React, { useState, useContext } from 'react';
import { AppContext } from '../../context';
import { numberFormat } from '../../numberFormat';
import AvatarStoryBookExample from '../../components/AvatarStoryBookExample';

import AccordionDetails from '@material-ui/core/AccordionDetails';

// import useStyles from '../molecules/ButtonActionStyle'; './ProductStyle.js'


const Product = ({ item }) => {

    // const { cartItems, setCartItems, cartItemsValue, setCartItemsValue } = useContext(AppContext);

    // const [productCounter, setProductCounter] = useState(0);

    // const handleOperations = (operation, valorVenda) => {

    //     if (operation === 'add') {
    //         setProductCounter(productCount => productCount + 1);
    //         setCartItems(() => cartItems + 1);
    //         setCartItemsValue(() => cartItemsValue + valorVenda);
    //     } else {
    //         if (productCounter > 0) {
    //             setProductCounter(productCount => productCount - 1);
    //             setCartItems(() => cartItems - 1);
    //             setCartItemsValue(() => cartItemsValue - valorVenda);
    //         }
    //     }
    // }
    return (
        <>

            {/* <AccordionDetails>
                <div className="product-container">

                    <AvatarStoryBookExample
                        altText="Logo"
                        srcLink={item.url_imagem}
                        size="small"
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
            </AccordionDetails> */}
            <h1>HEyhey</h1>
        </>
    );
}

export default Product;