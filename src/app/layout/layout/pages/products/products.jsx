import React, { useContext, useEffect, useState } from 'react'
import Options from './options';
import './styles.css';
import CartContext from '../../.././../../cart-modules/cart-context'



export default function Product({ id, name, image, sizes, styles, colors }) {
    
    

    const [selectedColor, setSelectedColor] = useState(colors[0])
    const [selectedStyle, setSelectedStyle] = useState(styles[0])
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const [price , setPrice] =useState((selectedStyle.price * selectedSize.price).toFixed(2))
    const [hover, setHover] = useState(false);
    const [cart , setCart] = useState([]);
    const ctx = useContext(CartContext)

    useEffect(() => {
        
    },[])
   
    return (
        <>
            <div className={`product : ${hover && 'hover'}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                    
                {hover && <div className="add-to-cart" onClick={() =>ctx.addToCart({
                    id, name , price, selectedSize,selectedStyle,selectedColor
                })} >
                    + <div>Add To Cart</div>
                    
                </div>}

                <div onClick={() =>ctx.removeCartItem(id)}>
                    <h1>Testing+</h1>
                </div>

                

                <div className="card">


                    <div className="name">
                        {name}
                    </div>

                    <img height={100} src={selectedColor.image} alt={`Image for ${name}`} />

                    <div className="price">
                        Price:{(selectedStyle.price * selectedSize.price).toFixed(2)}
                    </div>

                    <Options options={colors}
                        label='Available in'
                        selectedOption={selectedColor}
                        setSelectedOption={setSelectedColor} />

                    <Options options={styles}
                        label='Available Styles'
                        selectedOption={selectedStyle}
                        setSelectedOption={setSelectedStyle} />

                    <Options
                        label='Available Sizes'
                        options={sizes}
                        selectedOption={selectedSize}
                        setSelectedOption={setSelectedSize} />


                </div>





            </div>
        </>
    )
}
