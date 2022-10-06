type ItemProps = {
  descricao: string;
  quantity: number;
  valor_venda: number;
};

export interface ProductProps {
  item: ItemProps;
  addItem: (item: object) => void;
  removeItem: (item: object) => void;
}
