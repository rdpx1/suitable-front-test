import React from 'react';
import axios from 'axios';

const Categories = () => {
    return ( 

     );
}


useEffect(() => {
    const fetchCategories = async () => {
        const {data} = await axios.get(
            "https://demopizzaria.stbl.com.br/estoque/categorias_app/?format=json"
        )
    }

    fetchCategories();
}, [])
 
export default Categories;