import React from 'react';
import { numberFormat } from '../numberFormat';

import Chip from '@mui/material/Chip';


const ItemsValueChip = ({ itemsCount, itemsValue }) => {

    return (
        <>
            <Chip
                variant="outlined"
                label={(
                    <section>
                       <h3>Total: {numberFormat(itemsValue)}</h3>
                       <h5>Quantidade de itens: {itemsCount}</h5> 
                    </section>
                )}
                sx={{
                    color: 'white'
                }}
            >
            </Chip>
        </>

    );
}

export default ItemsValueChip;