import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyle = makeStyles((theme) => {

    return {
        root: {
            backgroundColor: '#00A17C',
        }

    }
})
export default useStyle;


/* .product-sumStyles-(theme)ontainer {
    position: absolute;
    left: 50%;)
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #222;
    transform: translateX(-50%) translateY(-50%);
    top: calc(100% - 30px);
    width: 100%;
}

.value-container {
    bottom: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.75rem;
    color: #eee;
}

.value-container h3, h5 {
    display: block;
    padding: 0;
    margin: 0;
    font-weight: 700; */
/* } */