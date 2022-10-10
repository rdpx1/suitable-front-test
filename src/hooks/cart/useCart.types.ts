export type Product = {
  descricao: string;
  id?: number;
  quantity: number;
  valor_venda: number;
  categoria_id?: number;
};

export interface CartProps {
  descricao: string;
  id?: number;
  quantity?: number;
  valor_venda: number;
  item?: Product[];
}
