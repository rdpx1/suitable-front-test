import React, { useState } from "react";

import { Story } from "@storybook/react";
import Categories from "./Categories";
import { CardapioProps } from "../../atoms/Cardapio/Cardapio.types";
import useCart from "../../../hooks/cart/useCart";

export default {
  title: "Categories",
  component: Categories,
};

const Template: Story<CardapioProps> = (args) => {

  const { cart, addItem, removeItem } = useCart();

  return <Categories addItem={addItem} removeItem={removeItem} cart={cart} {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  products: [
    {
      descricao: "Bebidas🥤",
      item: [
        {
          id: 23,
          descricao: "Coca cola lata 350ml",
          valor_venda: 4,
        },
        {
          id: 32,
          descricao: "Coca litão",
          valor_venda: 4,
        },
      ],
    },
  ],
};
