import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage () {
  
    const [products, setProducts] = useState(jsonData);
  
  return(
      <div id='product-page-div'>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable />
      </div>    
  )
}