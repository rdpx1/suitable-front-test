import { ContactSupportOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import useSWR from "swr";
import { categories, products } from "../lib/paths";
import { Product } from "./cart/useCart.types";
import { CategoriesProps } from "../stories/organisms/Categories/Categories.types";

export default function useProduct() {
  const { data, isValidating } = useSWR(categories);

  const categoriesList = data ? data.results : [];

  const { data: productsData, isValidating: isValidatingProducts } =
    useSWR(products);

  const productsList = productsData ? productsData.results : [];
  const loading = isValidating || isValidatingProducts;

  const productListFinal = useMemo(() => {
    categoriesList.map((category: CategoriesProps) => {
      category.item = productsList.filter(
        (product: Product) =>
          product.categoria_id === category.id && product.valor_venda > 0
      );
    });
    return categoriesList;
  }, [loading]);

  return {
    productListFinal,
    loading,
  };
}
