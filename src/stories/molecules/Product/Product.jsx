import { numberFormat } from '../../../numberFormat';
import useStyles from './ProductStyle.js'

import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const Product = ({
    item,
    addItem,
    removeItem,
    productQuantity
}) => {

    const classes = useStyles();



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
                        <Button
                            className={classes.buttons}
                            startIcon={<AddIcon />}
                            onClick={() => addItem(item)}
                        />
                    <Typography
                        className={classes.productDescription}
                        variant="h6"> {productQuantity ?? 0}
                    </Typography>
                
                    <Button
                        className={classes.buttons}
                        startIcon={<RemoveIcon />}
                        onClick={() => removeItem(item)}
                    />
                </div>
            </div>
        </>
    );
}

export default Product;