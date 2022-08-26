import Style from './sidenav.module.scss'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const SideNav = () => {

    const [ linkData, setLinkData ] = useState([])


    function fetchLinks() {
        const url = 'https://api.mediehuset.net/stringsonline/productgroups'
        fetch(url)
        .then(res => res.json())
        .then((linkData) => setLinkData(linkData.items))
    }

    useEffect(() => {
        fetchLinks()
    }, [])
    
    console.log(linkData)
    
    return (
        <nav className={Style.sidenav}>
            {linkData.map((item, index) => {
                return (
                    <li key={index}>
                        <NavLink to={item.title.replace(/\s/g, "")}>{item.title}</NavLink>
                        {(item.subgroups) ? 
                        <ul to={item.title}>
                            <ul>
                                {item.subgroups?.map((subitem, key) => {
                                    const path = subitem.title.replace(/\s/g, "") ? `${item.title.replace(/\s/g, "")}/${subitem.title.replace(/\s/g, "")}` : item.title.replace(/\s/g, "")
                                    return (subitem.title) ? (
                                        <li key={key}>
                                            <NavLink to={path}>{subitem.title}</NavLink>
                                        </li>
                                    ) : null
                                })}
                            </ul>
                        </ul>    
                    : null}
                    </li>
                )
            })}       
        </nav>
    )
}