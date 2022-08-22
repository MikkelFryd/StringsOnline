
import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://api.mediehuset.net/stringsonline/groups")
        .then((res) => res.json())
        .then((products) => setProducts(products.items))
    }, [])

    console.log(products)
    
    return (
        <article>
            {products && products.map((item, index) => {
                return (
                    <ProductCard
                    key={index}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    sortnumber={item.sortnumber}
                    />
                )
            })}
        </article>
    )
}