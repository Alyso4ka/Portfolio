import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Item = (props) => {
    return <FontAwesomeIcon className={props.className} icon={props.icon} size={props.size}  />
}

export default Item;