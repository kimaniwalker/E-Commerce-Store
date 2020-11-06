import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../../../cart-modules/cart-context'
import './styles.css'


export default function Header({ }) {

    const { cart } = useContext(cartContext)

    return (
        <div className="__dml header">
            <h2>Header</h2>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/about-us' >AboutUs</Link></li>
                <li><Link to='/products' >Store</Link></li>
                <li><Link to='/cart' >Cart: </Link>({cart.reduce((acc, item) => acc + item.qty, 0)})</li>
                <li><Link to='/checkout' >Checkout</Link></li>
            </ul>
        </div>
    )
}

