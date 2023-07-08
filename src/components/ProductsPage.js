import { useState } from 'react';
// import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';

export default function ProductsPage () {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnlyStock, setShowOnlyStock] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleToggleStock = (value) => {
    setShowOnlyStock(value);
  };
  
  return(
      <div id='product-page-div'>
        <h1>IronStore</h1>
        <SearchBar
        onSearch={handleSearch}
        showOnlyStock={showOnlyStock}
        onToggleStock={handleToggleStock}
        />
        <ProductRow
          searchQuery={searchQuery}
          showOnlyStock={showOnlyStock}
        />
      </div>    
  )
}