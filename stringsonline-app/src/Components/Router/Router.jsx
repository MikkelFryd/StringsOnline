import { Routes, Route } from "react-router-dom"
import { Home } from "../../Pages/Home"
import { Products } from "../../Pages/Products"

export const AppRouter = () => {

    return (
        <Routes>
            <Route index element={<Home />} />
                <Route path="Guitarer" element={<Products />}>
                    <Route path="Akustiske" element={<Products />} />
                    <Route path="Elektriske" element={<Products />} />
                </Route>
                <Route path="Basser" element={<Products />} />
                <Route path="Handmade" element={<Products />} />
                <Route path="Keyboards" element={<Products />} />
                <Route path="Trommer" element={<Products />} />
                <Route path="Percussion" element={<Products />} />
                <Route path="Stryg & Blæs" element={<Products />} />
                <Route path="Brands" element={<Products />}>
                    <Route path="Fender" element={<Products />} />
                    <Route path="Gibson" element={<Products />} />
                    <Route path="Martin" element={<Products />} />
                    <Route path="Taylor" element={<Products />} />
            </Route>
        </Routes>
    )
}