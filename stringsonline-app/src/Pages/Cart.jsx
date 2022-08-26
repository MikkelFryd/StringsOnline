import { CartContext } from '../Components/Auth/CartContext'
import { useContext, useState } from 'react'
import Style from './cart.module.scss'

export const Cart = (props) => {
    const {cartItems, setCartItems} = useContext(CartContext)
    let [quant, setQuant] = useState()

    function addToCart(item) {
        quant = item.quantity
        console.log(item.quantity)
        setQuant(item.quantity + 1)
        console.log(quant)
    }
    
    console.log(cartItems)
    return (
        <section className={Style.cartsection}>
            {cartItems && cartItems.map((item, index) => {
                return (
                    <div className={Style.cartitem} key={index}>
                        <img src={item.data.image.fullpath} alt={item.data.name} />
                        <h3>{item.data.name}</h3>
                        <div className={Style.buttoncontainer}>
                            <p>antal:</p>
                            <div>
                                <button>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => {addToCart(item)}}>+</button>
                            </div>
                        </div>
                        <div>
                            <h5>TOTAL: DKK</h5>
                        </div>
                        <button>X</button>
                    </div>
                )
            })}
                    <section className={Style.totalcontainer}>
                        <div>
                            <h2>BELØB DKK</h2>
                            <p>prisen er inkl. moms</p>
                        </div>
                        <button>RYD</button>
                    </section>
                    
        </section>
    )
}