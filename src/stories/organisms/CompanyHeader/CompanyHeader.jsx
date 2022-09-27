import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';


import './CompanyStyle.js'
import AvatarStoryBookExample from './AvatarStoryBookExample';


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
    fetchCompanyData();
  }, []);


  return (
    <>
      <div className="company-intro">
        <AvatarStoryBookExample
          altText="Logo"
          srcLink={headerData.logo}
          size="large"
        />
        <h1>{headerData.nome}</h1>
      </div>
    </>
  );
}

export default CompanyHeader
