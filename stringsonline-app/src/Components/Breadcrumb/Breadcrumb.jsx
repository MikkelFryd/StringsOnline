import { NavLink, useLocation } from "react-router-dom"
import { arrCrumbItems } from "../../assets/data/arrCrumbItems"

export const Breadcrumb = props => {

    const location = useLocation()
    console.log(location)
      return (
        <nav>
            {/* {history.map((item, index) => {
                return (
                    <></>
                )
            })} */}
        
        </nav>
      );
}