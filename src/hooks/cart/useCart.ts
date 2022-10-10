import { useState, useMemo, useCallback } from "react";
import { CartProps, Product } from "./useCart.types";

export default function useCart() {
  const [cart, setCart] = useState<CartProps[]>([]);

  const totalProductQuantity: number = useMemo(() => {
    return cart.reduce((total, currentItem) => total + currentItem.quantity, 0);
  }, [cart]);

  const totalValue: number = useMemo(() => {
    return cart.reduce(
      (total, currentItem) =>
        total + currentItem.valor_venda * currentItem.quantity,
      0
    );
  }, [cart]);

  const addItem = useCallback(
    (product: Product) => {
      if (cart.find((item) => item.id === product.id) == null) {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      } else {
        const newCart = cart.map((cartItem) => {
          if (cartItem.id === product.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        setCart(newCart);
        console.log(cart);
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    (product: Product) => {
      if (cart.find((item) => item.id === product.id)?.quantity === 1) {
        const updateCart = cart.filter((item) => item.id !== product.id);
        setCart(updateCart);
      } else {
        const updateRemoveCart = cart.map((cartItem) => {
          if (cartItem.id === product.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        });
        setCart(updateRemoveCart);
      }
    },
    [cart]
  );

  // const getProductQuantity = useCallback(
  //   (product: Product) => {
  //     cart.find((item) => item.id === product.id)
  //     console.log(cart)
  //     // return cart.quantity ?? 0
  //   },
  //   []
  // );

  return {
    cart,
    totalProductQuantity,
    totalValue,
    addItem,
    removeItem,
    // getProductQuantity
  };
}
