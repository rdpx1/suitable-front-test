import * as React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./HeaderStyle";
import { HeaderDataProps } from "./Header.types";

const Header = ({ dataHeader }: HeaderDataProps) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            {dataHeader.nome ?? "Nome da Empresa Filler"}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default React.memo(Header);
