import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';

import useStyles from './AvatarStyle';


const AvatarStoryBookExample = ({ altText, srcLink, size = "medium"}) => {

    const classes = useStyles(size);

    return (
        <Avatar
            alt={altText}
            src={srcLink}
            style={classes.root}
        />
    );
}


AvatarStoryBookExample.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
}

export default AvatarStoryBookExample;