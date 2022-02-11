import React from 'react';

const SmallProductListItem = ({ product }) => {
    const { name, price} = product;
    
    return (
            <h3>{name} - {price}</h3>
        );
};

export default SmallProductListItem;