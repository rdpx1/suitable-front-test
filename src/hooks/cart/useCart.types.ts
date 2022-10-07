export type Product = {
  descricao: string;
  id?: number;
  quantity: number;
  valor_venda: number;
  categoria_id?: number;
  getProductQuantity?: (item: Product) => React.ReactNode;
};

export interface CartProps {
  descricao: string;
  id?: number;
  quantity?: number;
  valor_venda: number;
  item?: Product[];
}
