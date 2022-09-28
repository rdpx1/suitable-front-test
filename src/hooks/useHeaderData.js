import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

export default function useHeaderData() {

    const [headerData, setHeaderData] = useState('');
    const { callFetch } = useFetch();

    
    // const handlingRequestHeader = async () => {

    //     const { results } = await callFetch('https://demopizzaria.stbl.com.br/core/empresa_personal_app/?format=json')
    //         .then(setHeaderData(results));
        
    // }

    // useEffect(() => {
    //     handlingRequestHeader()
    // }, [])

    return { headerData };
}