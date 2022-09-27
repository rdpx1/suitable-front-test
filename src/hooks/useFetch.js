import { useEffect, useState } from "react"


// https://demopizzaria.stbl.com.br/core/empresa_personal_app/?format=json
// https://demopizzaria.stbl.com.br/estoque/categorias_app/?format=json
// https://demopizzaria.stbl.com.br/estoque/produtos_app/?format=json


const useFetch =  () => {

  const [data, setData] = useState('');

  // let promise = '';
  
  const callFetch = async (
    path,
    method
  ) => {
    try {
    const response = await fetch(path, { method })
    const data = await response.json();

    return data;
    } catch (e) {
      console.error('The callFetch hook failed: ' + e);
    }
  }

    return { callFetch }
}

export default useFetch;