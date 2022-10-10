import React, { useState } from "react";
import { Story } from "@storybook/react";
import Products from "./Products";
import useCart from "../../../hooks/cart/useCart";
import { ProductItemProps } from "./Products.types";

export default {
  title: "Products",
  component: Products,
};

const Template: Story<ProductItemProps> = (args) => {
  const { cart, addItem, removeItem } = useCart();


  return <Products addItem={addItem} removeItem={removeItem} cart={cart}{...args} />;
};

export const Default = Template.bind({});
Default.args = {
  item: {
    descricao: "Coca cola lata 350ml",
    valor_venda: 4,
  },
};
