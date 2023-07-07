import React from 'react'

export default function SearchBar() {
  return (
    <div id='search-div'>
        <label>Search</label>
        <input type="text" id="search-bar" name="search-bar" />
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
        <label for="vehicle1">Only show products in stock</label>
    </div>
  )
}
