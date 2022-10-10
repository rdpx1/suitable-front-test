import { CartProps, Product } from "../../../hooks/cart/useCart.types";

export interface ProductItemProps {
  item: Product;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  cart: CartProps[];
}
