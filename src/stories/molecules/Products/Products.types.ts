import React from "react";
import { Product } from "../../../hooks/cart/useCart.types";

export interface ProductItemProps {
  item: Product;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  getProductQuantity: (item: Product) => React.ReactNode 
}
