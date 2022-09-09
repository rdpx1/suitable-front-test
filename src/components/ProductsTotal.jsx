import React, { useContext } from 'react';
import { AppContext } from '../context';

import Button from '@mui/material/Button';
import ItemsValueChip from './ItemsValueChip';

import './ProductsTotal.css'

const ProductsTotal = () => {

    const { cartItems, cartItemsValue } = useContext(AppContext);

    return (
        <>
            <div className="product-sum-container">
                <div className="value-container">
                    <ItemsValueChip
                        itemsCount={cartItems}
                        itemsValue={cartItemsValue}
                        color="secundary"
                    />
                </div>
                <Button
                    variant="outlined"
                    size="large"
                    onClick={() => { alert("The demo ends here :)") }}
                    sx={{
                        color: 'white',
                        borderColor: 'black',
                        borderRadius: '15px',
                        backgroundColor: '#2a573f',
                        height: '40px',
                        fontWeight: 'bold',
                    }}
                >
                    Pedir agora!
                </Button>
            </div>

        </>
    );
}


export default ProductsTotal;




