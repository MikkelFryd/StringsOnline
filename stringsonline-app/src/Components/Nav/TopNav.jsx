import { NavLink } from "react-router-dom"


export const TopNav = () => {

    return (
        <nav>
            <NavLink to="/">Logo</NavLink>
            <NavLink to="/">Forside</NavLink>
            <NavLink to="salgsbetingelser">Salgs- og handelsbetingelser</NavLink>
            <NavLink to="login">Login</NavLink>
        </nav>
    )
}