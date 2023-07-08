import React from 'react'

export default function SearchBar({ onSearch, showOnlyStock, onToggleStock }) {

    const handleSearch = (e) => {
        onSearch(e.target.value);
      };
    
      const handleToggleStock = (e) => {
        onToggleStock(e.target.checked);
      };


    return (
        <div id='search-div'>
            <label>Search</label>
            <input type="text" onChange={handleSearch} id="search-bar" name="search-bar" />
            <div>
                <input type="checkbox" id="show-products" name="show-products" onChange={handleToggleStock} />
                <label for="show-products">Only show products in stock</label>
            </div>
        </div>
    )
}
