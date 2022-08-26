import { NavLink } from "react-router-dom"
import Style from './topnav.module.scss'


export const TopNav = () => {

    return (
        <nav className={Style.topnav}>
            <NavLink to="/"></NavLink>
            <NavLink to="/">Forside</NavLink>
            <NavLink to="salgsbetingelser">Salgs- og handelsbetingelser</NavLink>
            <NavLink className={Style.loginbutton} to="login">Login</NavLink>
        </nav>
    )
}