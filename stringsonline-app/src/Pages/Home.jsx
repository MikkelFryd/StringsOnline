
import { SideNav } from '../Components/Nav/SideNav'
import { ProductList } from '../Components/Product/ProductList'
import Style from './home.module.scss'


export const Home = () => {

    return (
        <div className={Style.home}>
            <SideNav />
            <ProductList />
        </div>
    )
}