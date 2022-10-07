import { Product } from "../../../hooks/cart/useCart.types";

export interface CategoriesProps {
  descricao: string;
  item?: Product[];
  id?: number
}
