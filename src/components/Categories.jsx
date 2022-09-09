import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import './Categories.css'
import Product from './Product.jsx';

axios.defaults.baseURL = 'https://demopizzaria.stbl.com.br/estoque/';

const Categories = () => {

  const finalCategories = [];
  const [isRender, setIsRender] = useState(false);
  const [finalProducts, setFinalProducts] = useState([

      {
          "id": 46,
          "descricao": "Promo do Dia 🤑",
          "aberto": false,
          "detalhes": "Se delicie com as nossas preferidas da semana por um precinho camarada 🤩",
          "ordem": 2,
          "items": [
              {
                  "id": 339,
                  "descricao": "Brócolis e Calabresa",
                  "categoria": "Promo do Dia 🤑",
                  "valor_venda": 75,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/demopizzaria/1662641655393.jpg",
                  "detalhes": "Uma deliciosa combinação de calabresa fatiada, brócolis e o molho especial do chef",
                  "ordem": 2,
                  "item_pai": false,
                  "item_filho": false,
                  "cod_pai": null,
                  "categoria_id": 46
              },
              {
                  "id": 340,
                  "descricao": "Palmito e Pepperoni",
                  "categoria": "Promo do Dia 🤑",
                  "valor_venda": 75,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/demopizzaria/1662641672124.jpg",
                  "detalhes": "Deliciosa combinação de palmito inglês e pepperoni",
                  "ordem": 3,
                  "item_pai": false,
                  "item_filho": false,
                  "cod_pai": null,
                  "categoria_id": 46
              }
          ]
      },
      {
          "id": 34,
          "descricao": "Pizza speciale ⭐",
          "aberto": false,
          "detalhes": "Feitas no planeta terra, mas com sabor de outro planeta!",
          "ordem": 3,
          "items": [
              {
                  "id": 293,
                  "descricao": "Média",
                  "categoria": "Pizza speciale ⭐",
                  "valor_venda": 35,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/suitable/pizza_2_flavors.svg",
                  "detalhes": "Até 2 Sabores - 8 pedaços",
                  "ordem": 2,
                  "item_pai": true,
                  "item_filho": false,
                  "cod_pai": null,
                  "categoria_id": 34
              },
              {
                  "id": 294,
                  "descricao": "Média (1 Sabor)",
                  "categoria": "Pizza speciale ⭐",
                  "valor_venda": 35,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/suitable/pizza_1_flavors.svg",
                  "detalhes": "Até 2 Sabores - 8 pedaços",
                  "ordem": 2,
                  "item_pai": false,
                  "item_filho": true,
                  "cod_pai": 293,
                  "categoria_id": 34
              },
              {
                  "id": 295,
                  "descricao": "Média (2 Sabores)",
                  "categoria": "Pizza speciale ⭐",
                  "valor_venda": 35,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/suitable/pizza_2_flavors.svg",
                  "detalhes": "Até 2 Sabores - 8 pedaços",
                  "ordem": 2,
                  "item_pai": false,
                  "item_filho": true,
                  "cod_pai": 293,
                  "categoria_id": 34
              },
              {
                  "id": 296,
                  "descricao": "Grande",
                  "categoria": "Pizza speciale ⭐",
                  "valor_venda": 40,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/suitable/pizza_3_flavors.svg",
                  "detalhes": "Até 3 Sabores - 12 pedaços",
                  "ordem": 3,
                  "item_pai": true,
                  "item_filho": false,
                  "cod_pai": null,
                  "categoria_id": 34
              },
              {
                  "id": 297,
                  "descricao": "Grande (1 Sabor)",
                  "categoria": "Pizza speciale ⭐",
                  "valor_venda": 40,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/suitable/pizza_1_flavors.svg",
                  "detalhes": "Até 3 Sabores - 12 pedaços",
                  "ordem": 3,
                  "item_pai": false,
                  "item_filho": true,
                  "cod_pai": 296,
                  "categoria_id": 34
              },
              {
                  "id": 298,
                  "descricao": "Grande (2 Sabores)",
                  "categoria": "Pizza speciale ⭐",
                  "valor_venda": 40,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/suitable/pizza_2_flavors.svg",
                  "detalhes": "Até 3 Sabores - 12 pedaços",
                  "ordem": 3,
                  "item_pai": false,
                  "item_filho": true,
                  "cod_pai": 296,
                  "categoria_id": 34
              },
              {
                  "id": 299,
                  "descricao": "Grande (3 Sabores)",
                  "categoria": "Pizza speciale ⭐",
                  "valor_venda": 40,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/suitable/pizza_3_flavors.svg",
                  "detalhes": "Até 3 Sabores - 12 pedaços",
                  "ordem": 3,
                  "item_pai": false,
                  "item_filho": true,
                  "cod_pai": 296,
                  "categoria_id": 34
              }
          ]
      },
      {
          "id": 5,
          "descricao": "Bebidas🥤",
          "aberto": false,
          "detalhes": "Extremamente gelada!",
          "ordem": 6,
          "items": [
              {
                  "id": 23,
                  "descricao": "Coca cola lata 350ml",
                  "categoria": "Bebidas🥤",
                  "valor_venda": 4,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/demopizzaria/1619891306787",
                  "detalhes": "---",
                  "ordem": 1,
                  "item_pai": false,
                  "item_filho": false,
                  "cod_pai": null,
                  "categoria_id": 5
              },
              {
                  "id": 26,
                  "descricao": "Coca cola 2L",
                  "categoria": "Bebidas🥤",
                  "valor_venda": 10,
                  "url_imagem": "https://suitable-images.s3.amazonaws.com/demopizzaria/1619891324812",
                  "detalhes": "---",
                  "ordem": 5,
                  "item_pai": false,
                  "item_filho": false,
                  "cod_pai": null,
                  "categoria_id": 5
              }
          ]
      },
  ]);

  useEffect(() => {
    const getData = async () => {
      const [category, product] = await Promise.all([
        axios.get('/categorias_app/?format=json'),
        axios.get('/produtos_app/?format=json')
      ]);

      // handlingData(category.data.results, product.data.results);

      console.log("hey");
    }
    getData();
    setIsRender(true);

  }, []);

  // const handlingData = (categories, products) => {

  //   for (let index = 0; index < categories.length; index++) {
  //     finalCategories.push(categories[index]);
  //     finalCategories[index].items = [];

  //     for (let i = 0; i < products.length; i++) {
  //       if (products[i].categoria_id === finalCategories[index].id && products[i].valor_venda > 0) {
  //         finalCategories[index].items.push(products[i]);
  //       }
  //     }
  //   }
  //   console.log(finalCategories);
  //   setFinalProducts(finalCategories);
  //   setRender(true);
  // }

  console.log(isRender, finalProducts);
  if (isRender) {
  return (
    <>
      {finalProducts.map((category, index) => {
        return (
          <Accordion
            key={index}
            sx={{ color: 'white' 

            }}
          >
            <AccordionSummary
            sx={{ color: 'white' 
              }}
              expandIcon={
              <ExpandMoreIcon 
              sx={{
                color: 'white'
              }}
              />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{category.descricao}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {category.items.map((item, i) => {
                return (
                  <Product
                    item={item}
                    key={i}
                  />
                )
              })}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </>
  );
  } else {
    return (
      <>
        <CircularProgress />
      </>
    );
  }

}

export default Categories;