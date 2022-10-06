export interface CategoriesProps {
    products: any;
    loading: boolean;
    addItem: (item: object) => void;
    removeItem: (item: object) => void;
}