import { useState, useMemo } from "react";

export default function useCart() {
  
  type ProductProps = {
    id: number;
    valor_venda: number;
  };

  const [cart, setCart] = useState([]);
  const totalProductQuantity: any = useMemo(() => {
    return (
      cart.reduce((total, currentItem) => total + currentItem.quantity, 0)
    )
  }, [cart])

  const totalValue: any = useMemo(() => {
    return (
      cart.reduce((total, currentItem) => total + currentItem.valor_venda * currentItem.quantity, 0)
    )
  }, [cart])
  

  const addItem = (product: ProductProps) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === product.id) == null) {
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        });
      }
    });
  };
  
  const removeItem = (product: ProductProps) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === product.id)?.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        return prevCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // const getProductQuantity = (product: ProductProps) => 
  //   cart.find(item => item.id === product.id)?.quantity;
  

  return {
    cart,
    totalProductQuantity,
    totalValue,
    addItem,
    removeItem,
    // getProductQuantity,
  };

}
