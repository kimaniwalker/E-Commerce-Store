import React, { useContext } from 'react'
import SEO from '../../seo'
import CartContext from '../../../../../cart-modules/cart-context'
import { formatCurrency } from '../../../../../cart-modules/string';



/* function withQuantities(products) {
    return products.reduce((acc, product) => {
        const existing = acc.find((p) => product.id === p.id)
        return existing
            ? [
                ...acc.map((p) => product.id === p.id ? { ...p, qty: p.qty + 1 } : p,)
                ,
            ]
            : [...acc, { ...product, qty: 1 }]

    }, []);
} */


export default function Cart(props) {
    const { cart, changeQty } = useContext(CartContext);

    
    return (
        <>
            <SEO title='Cart Page' />
            <h1>Cart</h1>

            <table width='100%' cellSpacing={0} cellPadding={0}>
                <thead>
                    <tr>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Subtotal
                        </th>
                        <th>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <input
                                    type='text'
                                    value={product.qty}
                                    onChange={(e) => changeQty(product, parseInt(e.target.value))} />
                                    
                                    
                                    </td>
                                <td>{formatCurrency(product.price * product.qty)}</td>
                                <td></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
