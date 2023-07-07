import React from 'react'

export default function SearchBar() {
  return (
    <div id='search-div'>
        <label>Search</label>
        <input type="search" id="search-bar" name="search-bar" />
        <div>
            <input type="checkbox" id="show-products" name="show-products" />
            <label for="show-products">Only show products in stock</label>
        </div>
    </div>
  )
}
