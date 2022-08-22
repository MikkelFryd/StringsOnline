import { TopNav } from "../Nav/TopNav"
import { ProductBasket } from "../Product/ProductBasket"
import { Search } from "../Search/Search"
import { InfoBar } from "./InfoBar"


export const Header = () => {

    return (
        <header>
            <InfoBar />
            <ProductBasket />
            <div>
                <TopNav />
                <Search />
            </div>
        </header>
    )
}