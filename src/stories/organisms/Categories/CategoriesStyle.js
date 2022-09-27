import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => {
    return {

        // root: {
        //     // display: 'flex',
        //     // alignItems: 'center',
        //     // color: '#444',
        //     // margin: '8px 0',
        //     // padding: '15px 20px',
        //     // borderRadius: '5px',
        // },
        accordionTextDetails: {
            fontWeight: "bold",
            fontSize: "16px",
            margin: "0px",
        },
        productList: {
            padding: "0px 16px !important",
            "& .Mui-expanded": {
                minHeight: "72px",
                margin: "0",
            },
        }



    }
})
export default useStyles;