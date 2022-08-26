import Style from './productbasket.module.scss'
import { NavLink } from 'react-router-dom'


export const ProductBasket = () => {



    return (
        <NavLink to='cart' className={Style.productbasket}></NavLink>
    )
}
    
