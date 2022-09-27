import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import useStyles from "./ButtonActionStyle"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const ButtonAction = ({
  type,
  handleQuantityChange
}) => {
  const classes = useStyles();

  return (
    <>
      <IconButton
        className={classes.root}
        onClick={() => {handleQuantityChange()}}
      >
        {type === 'add' 
          ? <AddIcon fontSize="inherit" /> 
          : <RemoveIcon fontSize="inherit" />
        }
      </IconButton>

    </>
  );
}



export default ButtonAction;





