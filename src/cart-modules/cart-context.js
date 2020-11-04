import { createContext } from 'react'
import { getCartItems } from './cart'


const ctx = createContext(getCartItems())
export default ctx;
