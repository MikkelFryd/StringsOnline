import { Routes, Route } from "react-router-dom"
import { Login } from "../../Pages/Login"
import { ProductList } from "../Product/ProductList"
import { useState, useEffect } from "react"
import { Cart } from "../../Pages/Cart"

export const AppRouter = () => {
    
    const [ routeData, setRouteData ] = useState([])


    function fetchLinks() {
        const url = 'https://api.mediehuset.net/stringsonline/productgroups'
        fetch(url)
        .then(res => res.json())
        .then((routeData) => setRouteData(routeData.items))
    }

    useEffect(() => {
        fetchLinks()
    }, [])

    
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='cart' element={<Cart />} />
            {routeData.map((item, index) => {
                return (
                    <>
                        <Route key={index} element={<ProductList title={item.title} id={item.id}/>} path={item.title.replace(/\s/g, "")}/>
                        {(item.subgroups) ? 
                        <>
                                {item.subgroups?.map((subitem, subindex) => {
                                    const path = subitem.title.replace(/\s/g, "") ? `${item.title.replace(/\s/g, "")}/${subitem.title.replace(/\s/g, "")}` : item.title.replace(/\s/g, "")
                                    return (subitem.title) ? (
                                            <Route key={subindex} path={path} element={<ProductList subtitle={subitem.title} subid={subitem.id} />}/>
                                    ) : null
                                })}  
                        </>    
                    : null}
                    </>
                )
            })}       
        </Routes>

    )
}