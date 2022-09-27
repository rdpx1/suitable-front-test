import { useState } from "react";


export default function useCartCounter() {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    const [countTotalItems, setCountTotalItems] = useState(0);

    const addItem = (itemValue) => {
        setCount(prevCount => prevCount + 1);
        // setValue(prevValue => prevValue + itemValue);
        setCountTotalItems(prevTotalItems => prevTotalItems + 1);
    }

    const removeItem = (itemValue) => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
            // setValue(prevValue => prevValue - itemValue);
            setCountTotalItems(prevTotalItems => prevTotalItems -1);

        }
    }

    return { count, value, addItem, removeItem };

}