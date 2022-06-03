import React from 'react';
import Product from './components/Product';
import Products from './components/Products';
import { IProduct } from './interfaces/IProduct';

const products: IProduct[] = [
  { id:1, title: "chair", category: "1", image: "chair.png"},
  { id:2, title: "book", category: "1", image: "book.png"},
  { id:3, title: "glass", category: "1", image: "glass.png"},
]

const App = () => {
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default App;