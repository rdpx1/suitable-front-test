import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import useStyles from "./CardapioStyle";

import { CardapioProps } from "./Cardapio.types";

const Cardapio = ({
  text,
}: //     color
CardapioProps) => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <Typography variant="h6" className={classes.cardapioText}>
          {/* {" "} */}
          {text}
        </Typography>
      </Container>
    </>
  );
};

export default Cardapio;
