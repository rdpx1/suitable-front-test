import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './CompanyHeader.css'

const CompanyHeader = () => {
    const [headerData, setHeaderData] = useState('');
    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanyData = async () => {

            try {
                const {data} = await axios.get(
                    'https://demopizzaria.stbl.com.br/core/empresa_personal_app/?format=json'
                );

                console.log(data);

                setHeaderData(data.results[0]);
            } catch (err) {
                // setError(err.message)
                setHeaderData(null)
            }
        }
        fetchCompanyData();
    }, []);

    return (
        <>
            <h1>{headerData.nome}</h1>
            <h3>{headerData.apresentacao}</h3>
            <h3>{headerData.endereco}</h3>
            <h4>{headerData.whatsapp}</h4>
            <img src={headerData.logo} alt="logo"/>  

            {/* <p>{{ JSON.stringify(data) }}</p> */}
        </>
    );
}

export default CompanyHeader
