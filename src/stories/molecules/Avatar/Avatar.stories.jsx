import React from 'react';

import AvatarStoryBookExample from "../components/AvatarStoryBookExample";

export default {
    title: "Avatar",
    component: AvatarStoryBookExample
}



const Template = args => <AvatarStoryBookExample {...args} />;

export const AvatarBugsBunny = Template.bind({});

AvatarBugsBunny.args = {
    altText: "Bugs bunny",
    srcLink: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png',
}


export const AvatarFlork = Template.bind({});

AvatarFlork.args = {
    altText: "Flork",
    srcLink: 'https://www.imagenspng.com.br/wp-content/uploads/2022/04/flork-png-45-1000x1024.png',
    size: "large",
}


