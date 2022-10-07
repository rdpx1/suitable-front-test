import React from "react";

import { Story } from "@storybook/react";
import Categories from "./Categories";
import { CategoriesProps } from "./Categories.types";

export default {
  title: "Categories",
  component: Categories,
};

// const Template: Story<CategoriesProps> = (args) => {
//   // return <Categories {...args} />;
// };

// export const Default = Template.bind({});
// Default.args = {
//   products: [
//     {
//       descricao: "Bebidas🥤",
//       item: [
//         {
//           descricao: "Coca cola lata 350ml",
//           valor_venda: 4,
//         },
//         {
//           descricao: "Coca cola 2L",
//           valor_venda: 10,
//         },
//       ],
//     },
//   ],
// };
