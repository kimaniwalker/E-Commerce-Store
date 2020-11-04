import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../../../cart-modules/cart-context'
import './styles.css'


export default function Header({  }) {
    
    const ctx = useContext(cartContext)
    
    return (
        <div className="__dml header">
            <h2>Header</h2>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/about-us' >AboutUs</Link></li>
                <li><Link to='/products' >Store</Link></li>
    <li><Link to='/cart' >Cart: </Link>({ctx.cart.length = null ? 'Empty' : ctx.cart.length})</li>
            </ul>
        </div>
    )
}

