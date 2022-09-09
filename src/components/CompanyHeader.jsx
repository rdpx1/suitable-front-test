import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Avatar from '@mui/material/Avatar';

import './CompanyHeader.css'

const CompanyHeader = () => {
  const [headerData, setHeaderData] = useState('');

  useEffect(() => {
    const fetchCompanyData = async () => {

      try {
        const { data } = await axios.get(
          'https://demopizzaria.stbl.com.br/core/empresa_personal_app/?format=json'
        );
        setHeaderData(data.results[0]);
      } catch (err) {
        setHeaderData(null)
      }
    }
    console.log("passei aqui hue");
    fetchCompanyData();
  }, []);


  return (
    <>
      <div className="company-intro">
        <Avatar
          alt="Logo"
          src={headerData.logo}
          sx={{ width: 70, height: 70}}
        />
        <h1>{headerData.nome}</h1>
      </div>
    </>
  );
}

export default CompanyHeader
