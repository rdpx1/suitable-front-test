import { makeStyles } from "@material-ui/core";
import useStyles from "../molecules/ButtonActionStyle";

const useStyles = makeStyles((theme) => {
    return {

        productContainer: {
            display: flex,
            backgroundColor: '#2a573f',
            margin: '8px 0',
            padding: '0px 15px',
            bordeRadius: '5px',
            justifyContent: 'space-between',
            color: '#eee',
            alignItems: 'center',
            fontWeight: 700,
            height: '60px',
            gap: '10px',
        },
        // productDescription {
        //     font-size: 0.8rem;
        //         display: flex;
        //         flex-direction: column;
        //         justify-content: center;
        //         max-height: 60px;
        // }
        // productDescriptionH3: {
        //         display: 'inline',
        //         padding: 0,
        //         margin: 0,
        //         font-weight: 700,
        // }
        // buttonsHolder: {
        //     display: 'flex',
        //     gap: '5px',
        //     marginLeft: 'auto',
        // }
    }

});

export default useStyles;

// .button-product {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 20px;
//     width: 20px;
//     background-color: #8b4513;
//     color: #eee;
//     font-weight: 700;
//     font-size: 0.80rem;
//     border: 1px solid #eee;
//     border-radius: 50%;
//     cursor: pointer;
// }

// .buttons-holder {
//     display: flex;
//     gap: 5px;
//     margin-left: auto;
// }

// .buttons-holder span {
//     width: 10px;
//     text-align: center;
// }