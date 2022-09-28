import React from 'react';

import ButtonAction from './ButtonAction';

export default {
    title: "ButtonAction",
    component: ButtonAction
}


const Template = args => <ButtonAction {...args} />;

export const AddButton = Template.bind({});

AddButton.args = {
    type: "add",
}

export const RemoveButton = Template.bind({});

RemoveButton.args = {
    type: "remove",
}

