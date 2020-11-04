import React, { useState, useEffect } from 'react'
import Layout from './app/layout'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.css'




import Homepage from './app/layout/layout/pages/homepage'
import AboutUs from './app/layout/layout/pages/aboutUs';
import Products from './app/layout/layout/pages/products';
import Cart from './app/layout/layout/pages/cart';
import cartContext from './cart-modules/cart-context';
import UseCart from './hooks/use-cart';



export default function App(props) {
  
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter((prev) => prev + 1)
  }, []);
  const { cart, addToCart, getCartItems, clearCartItems, removeCartItem } = UseCart([])
  return (
    <>
      <cartContext.Provider value={{
        cart,
        addToCart,
        getCartItems,
        clearCartItems,
        removeCartItem
      }}>

        <BrowserRouter>

          <Layout onChange={() => setCounter((prev) => prev + 1)}>
            <Switch>

              <Route exact path='/'>
                <Homepage />
              </Route>

              <Route exact path='/about-us'>
                <AboutUs />
              </Route>

              <Route exact path='/products'>
                <Products />
              </Route>

              <Route exact path='/cart'>
                <Cart />
              </Route>

            </Switch>
          </Layout>

        </BrowserRouter>



      </cartContext.Provider>
    </>
  )
}
