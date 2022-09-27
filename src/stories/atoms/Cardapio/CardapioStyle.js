import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {

    return {
        
        root:{
            height: '49px',
            backgroundColor: '#F6F6F6',
            padding: '8px 12px',
        },
        cardapioText:{
            color: '#00A17C',
            fontWeight: 500,
            fontSize: "20px",
        }
    };
})
 
export default useStyles;