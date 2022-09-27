import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


import useStyles from './CardapioStyle';

const Cardapio = ({
    text,
    color
}) => {

    const classes = useStyles();

    return (
        <>
            <Container className={classes.root}>
                <Typography
                    variant="h6"
                    className={classes.cardapioText}
                > {text}
                </Typography>
            </Container>
        </>
    );
}

export default Cardapio;