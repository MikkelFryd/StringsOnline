import Style from './productlist.module.scss'
import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"

export const ProductList = (props) => {

    const subid = props.subid
    const [productData, setProductData] = useState([])
    
    function getProducts() {
            fetch(`https://api.mediehuset.net/stringsonline/productgroups/${subid}`)
            .then((res) => res.json())
            .then((productData) => setProductData(productData.group))
          }
          useEffect(() => {
            getProducts()
          }, [subid])


    console.log(productData)
    
    return (
        <div className={Style.productlist}>
             {productData.products && productData.products.map((item, index) => {
                return (
                    <ProductCard
                        key={index}
                        brand={item.brand}
                        id={item.id}
                        image={item.image_fullpath}
                        name={item.name}
                        offerprice={item.offerprice}
                        price={item.price}
                        rating={item.rating}
                        stock={item.stock}
                        description_long={item.description_long}
                        description_short={item.description_short}
                    />
                )
            })}
        </div>
    )
}