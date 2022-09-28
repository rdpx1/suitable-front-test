import React from 'react';

import Product from './Product';

export default {
    title: "Product",
    component: Product
}


const Template = args => <Product {...args} />;

export const Default = Template.bind({});

AddButton.args = {
    type: "add",
}