import React from 'react';
import { numberFormat } from '../../../numberFormat';

import Chip from '@material-ui/core/Chip';


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
                    // color: 'white',
                    // height: '40px'
                    
            >
            </Chip>
        </>
    );
}

export default ItemsValueChip;