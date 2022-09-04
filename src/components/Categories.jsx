import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductList from './ProductList.jsx';

import './Categories.css'

const Categories = () => {

    const [categories, setCategories] = useState('');

    // useEffect(() => {
    //     const getCategories = async () => {
    //         const { data } = await axios.get(
    //             "https://demopizzaria.stbl.com.br/estoque/categorias_app/?format=json"
    //         ).then(() =>
    //             setCategories(data.results)
    //         )
    //             .catch((err) => {
    //                 console.log("Error in getCategories call" + err);
    //             });

    //         getCategories();
    //     }
    // },
    //     []);

    useEffect(() => {
        const getCategories = async () => {

            try {
                const { data } = await axios.get(
                    'https://demopizzaria.stbl.com.br/estoque/categorias_app/?format=json'
                );

                setCategories(data.results);
            } catch (err) {
                // setError(err.message)
                setCategories(null)
            }
        }
        getCategories();
    }, []);


    // useEffect(() => {
    //     const getProducts = async () => {
    //         const { data } = await axios.get(
    //             "https://demopizzaria.stbl.com.br/estoque/produtos_app/?format=json"
    //         ).then((data) =>
    //             linkCategories(data)
    //         ).catch((err) =>
    //                 console.log("Error found at getProducts:" + err))
    //         }
    //     }
    // , [])


// const linkCategories = (data) => {


// }


return (
    <>
        {/* {categories.map((category, index) =>
            <div className="category-container" key={index}>{category.descricao}</div>
            // <ProductList /> 

        )} */}
    </>
);

}

export default Categories;