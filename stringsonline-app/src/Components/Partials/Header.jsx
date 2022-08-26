import { TopNav } from "../Nav/TopNav"
import { Search } from "../Search/Search"
import { InfoBar } from "./InfoBar"
import Style from './header.module.scss'


export const Header = () => {

    return (
        <header>
            <InfoBar />
            <div className={Style.navcontainer}>
                <TopNav />
            </div>
                <Search />
        </header>
    )
}