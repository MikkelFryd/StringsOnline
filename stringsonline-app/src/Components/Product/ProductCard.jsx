import { useContext } from 'react'
import { CartContext } from '../Auth/CartContext'
import Style from './productcard.module.scss'


export const ProductCard = props => {
    const {cartItems, setCartItems} = useContext(CartContext)
    const url = `https:/api.mediehuset.net/stringsonline/products/${props.id}`

    function handleCartItem() {
        fetch(url)
        .then(res => res.json())
        .then((data) => saveToArray(data.item))
    }

    function saveToArray(data) {
        let clone = [...cartItems]
        clone.push({data: data, quantity: 1})
        setCartItems(clone)
    }

    console.log(cartItems)

    return (
        <section className={Style.productcard}>
            <img src={props.image} alt=""/>
            <article>
                <h3>{props.name}</h3>
                <p>{props.description_short}</p>
            </article>
            <div className={Style.pricecontainer}>
                <div>
                    <p>Pris: DKK {props.price}</p>
                </div>
                <button onClick={() => {handleCartItem(props.id)}}>Læg i kurv</button>
                <p>5+ på lager</p>
            </div>
        </section>
    )
}