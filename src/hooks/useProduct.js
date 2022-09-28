import { useState, useEffect } from "react";
import useSWR from "swr";
import useFetch from "./useFetch";
import { categories, products } from "../lib/paths";
import { CircularProgress } from "@material-ui/core";

export default function useProduct() {

    const [products, setProducts] = useState([]);

    const fetcher = url => fetch(url).then(r => r.json());
    const { data, error } = useSWR(categories, fetcher)

    return !data ? 
    <CircularProgress /> :

    console.log(data);

    // const { data, error } = useSWR(categories, fetcher);

    // const results = data ? data.results || [] : [];

    
    // return console.log(results);

    // useEffect(() => {
        // const getData = async () => {
            // const [category, product] = await Promise.all([
                // axios.get('/categorias_app/?format=json'),
                // axios.get('/produtos_app/?format=json')
            // ]);

            // handlingData(category.data.results, product.data.results);

        // }
        // getData();
// ,[]);

    // const handlingData = (categories, products) => {
    //     categories.map((category) => {
    //         category.items =
    //             products.filter(product =>
    //                 product.categoria_id === category.id
    //                 &&
    //                 product.valor_venda > 0
    //             );
    //     })
    //     setProducts(categories);
    // }

    // return { products }
}