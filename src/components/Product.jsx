import React, { useState } from 'react';

import './Product.css'


const Product = ({ item }) => {

    const [productCounter, setProductCounter] = useState(0);

    return ( 
        <>
        
            <div className="product-container">

                <div className="product-description">
                    { item.descricao }
                </div>
                <div>
                    <span>{item.valor_venda}</span>
                </div>

            <div className="buttons-holder">
                <button className="button-product">+</button>
                <span>
                    {productCounter}
                </span>
                <button className="button-product">-</button>
            </div>


            </div>

        </>       
     );
}
 
export default Product;