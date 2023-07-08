import React from 'react';
import { useState } from 'react';
import data from '../data.json';

export default function ProductRow({ searchQuery, showOnlyStock }) {

    const filteredProducts = data.filter((product) => {
        const lowerCaseName = product.name.toLowerCase();
        const lowerCaseQuery = searchQuery.toLowerCase();
    
        return lowerCaseName.includes(lowerCaseQuery) && (!showOnlyStock || product.inStock);
      });
    
    
    return (
        <>
            {filteredProducts.map((product, i) => (
                <tr key={i}>
                {product.inStock ? <td>{product.name}</td> : <td style={{ color: 'red' }}>{product.name}</td>}
                <td>{product.price}</td>
                </tr>
            ))}
        </>
    )
}
