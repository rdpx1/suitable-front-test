import React, { useState } from 'react';

import Product from './Product';

const ProductList = () => {


    const [products, setProducts] = useState([

        {
            id: 1,
            descricao: "Coca cola lata 350ml",
            valor_venda: 4,
        },
        {
            id: 2,
            descricao : "Coca cola 2L",
            valor_venda: 10,

        },
           
    ]);

    return ( 
        products.map((product, index) => 
            <Product 
                item={product} 
                key={index}
            />
        )
     );
}
 
export default ProductList;