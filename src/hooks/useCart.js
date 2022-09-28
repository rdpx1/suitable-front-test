import { useState } from "react";

export default function useCart() {

    const [cart, setCart] = useState([]);
    // const count = cart.length();
    const totalValue = 0;

    const addItem = (product) => {

        // cart.map((item) => {

        //     if(product.id === item.id){
        //         setCart(prevCart => (
        //             // {...prevCart, 
        //             // product.quatity: 1 })
        //         //     cart: prev.todoItems.map(
        //         //         el => el.key === key? { ...el, status: 'done' }: el
                    
        //         // });
        //     // }

        //     count += 1;

        // })


        // totalValue =

        setCart(prevCart => ({...prevCart, product}));

        // setCart(prevCart => ({...prevCart, 
        //     product.quatitity: 1 }));
        

        console.log(cart);
        // setCount(prevCart => ...prevCart);
        // setValue(prevValue => prevValue + itemValue);
        // setCountTotalItems(prevTotalItems => prevTotalItems + 1);

        //Adicionar o objeto à lista de cart
    }

    const removeItem = (product) => {
        // if (count > 0) {
            // setCount(prevCount => prevCount - 1);
            // setValue(prevValue => prevValue - itemValue);
            // setCountTotalItems(prevTotalItems => prevTotalItems -1);

        // }
        //identificar qual é o produto e remover da lista
    }

    return { cart, addItem, removeItem };

}