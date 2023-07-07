import React from 'react';
import { useState } from 'react';
import data from '../data.json';

export default function ProductRow() {

    const [productData, setProductData] = useState(data)

    console.log(data)
    
    return (
        <>
        {productData.map((product, i) => (

            <tr key={i}>
                {product.inStock ? <td>{product.name}</td> : <td style={{color: 'red'}}>{product.name}</td>}
                <td>{product.price}</td>
            </tr>

        )
    )}
        </>
    )
}
