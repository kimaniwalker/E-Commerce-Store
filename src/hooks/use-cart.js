import React, { useEffect, useState } from 'react'
export default function UseCart(props) {
    const [cart, setCart] = useState(
        () => JSON.parse(localStorage.getItem('cart')) || []
    );

    



    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, ['cart', cart]);



    function addToCart(product,id) {
        


        
        setCart((prev) => [...prev, product])
        localStorage.setItem('cart', JSON.stringify([...cart, product]))

    

    }

    

    function getCartItems() {
        const data = localStorage.getItem('cart')
        if (!data) return []
        return JSON.parse(data)
    }

    function clearCartItems() {
        setCart([])
        return cart;
    }

    const removeCartItem = (id) => {
        const itemId = getItemId(id)
        console.log(itemId)
        
        if(!itemId) return []
        const result = cart.filter(cartItem => cartItem.id !== itemId)
        console.log(result)
        
        setCart(result)
        return result

    
    }

    function getItemId(id) {
        return id
        
    }

    return {
        cart,
        addToCart,
        getCartItems,
        clearCartItems,
        removeCartItem
    }
}
