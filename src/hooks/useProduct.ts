import { ContactSupportOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import useSWR from "swr";
import { categories, products } from "../lib/paths";

export default function useProduct() {
  const {
    data,
    isValidating,
  } = useSWR(categories);

  const categoriesList = data ? data.results : [];

  const {
    data: productsData,
    isValidating: isValidatingProducts,
  } = useSWR(products);

  const productsList = productsData ? productsData.results : [];
  const loading = isValidating || isValidatingProducts;

  const productListFinal = useMemo(() => {
    categoriesList.map((category: any) => {
      category.item = productsList.filter(
        (product: any) =>
          product.categoria_id === category.id && product.valor_venda > 0
      );
    });
    return categoriesList;
  }, [loading]);

  return { 
    productListFinal, 
    loading 
};
}
