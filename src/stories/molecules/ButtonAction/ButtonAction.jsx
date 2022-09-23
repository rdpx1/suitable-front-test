import React from 'react';
import IconButton from '@material-ui/core/IconButton';
// import useStyles from "./ButtonActionStyle"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ButtonAction = ({


}) => {
  // const classes = useStyles();

  return (
    <>
      <IconButton aria-label="delete" size="medium">
        <AddIcon fontSize="inherit" />
        <RemoveIcon fontSize="inherit" />
      </IconButton>
    </>
  );
}



export default ButtonAction;





