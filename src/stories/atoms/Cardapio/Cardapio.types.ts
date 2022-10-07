import { Product } from "../../../hooks/cart/useCart.types";

export interface CardapioProps {
  textCardapio?: string;
  products: Product[];
  loading: boolean;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
  getProductQuantity: (item: Product) => React.ReactNode;
}
