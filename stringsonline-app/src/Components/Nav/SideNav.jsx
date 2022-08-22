import Style from './sidenav.module.scss'
import { arrNavItems } from '../../assets/data/arrNavItems'
import { NavLink } from 'react-router-dom'


export const SideNav = (props) => {
    const fetchProducts = props.fetchProducts 
    
    return (
        <nav className={Style.sidenav}>
        <ul className={Style.gridcontainer}>
            {arrNavItems.map((item, key) => {
                return (
                    item.display ?
                        <li key={key} className={Style.linkcontainer}>
                            <NavLink to={item.path} className={Style.navlink}>{item.title}</NavLink>
                            {(item.children) ?
                                <ul to={item.path} className={Style.dropdown}>
                                    <ul className={Style.dropdownlinks}>
                                    {item.children?.map((subitem, subkey) => {
                                        const path = subitem.path ? `${item.path}/${subitem.path}` : item.path
                                        return (subitem.display) ? (
                                            <li key={subkey} className={Style.dropdowncontent}>
                                                <NavLink onClick={() => fetchProducts(item.id)} className={Style.dropdownlink} to={path}>{subitem.title}</NavLink>
                                            </li>
                                        ) : null
                                    })}
                                    </ul>
                                </ul> 
                            : null}
                        </li>
                        : null
                )
            })}
        </ul>
    </nav>
    )
}