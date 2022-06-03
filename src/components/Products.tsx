import React from 'react';
import { IProduct } from "../interfaces/IProduct";

const Products = (props: any) => {
    const a: IProduct[] = [...props.products];
    console.log(a);
    
    
    return (
        <div>
            
        </div>
    );
};

export default Products;