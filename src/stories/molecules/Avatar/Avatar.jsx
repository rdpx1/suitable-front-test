import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';


const AvatarStoryBookExample = ({ altText, srcLink, size = "medium" }) => {

    let pixels = 60;
    if (size === "small")
        pixels = 45;
    if (size === "large")
        pixels = 70;


    const style = {
        height: `${pixels}px`,
        width: `${pixels}px`
    }

    return (
            <Avatar
                alt={altText}
                src={srcLink}
                style={style}
            />
    );
}

AvatarStoryBookExample.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
}

export default AvatarStoryBookExample;