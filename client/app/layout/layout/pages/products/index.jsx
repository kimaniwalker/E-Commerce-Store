import React from 'react'
import SEO from '../../seo'
import products from '../../../../data/products.json'
import Product from './products'

export default function Products(props) {
    

    return (
        <>
         <SEO title={'Our Products'}/>
         <h1>Shit we sell</h1>   
         <div className="products">
             {products.map((product)=>(
                 <Product key={product.id} {...product} />
             ))}
         </div>
        </>
    )
}
