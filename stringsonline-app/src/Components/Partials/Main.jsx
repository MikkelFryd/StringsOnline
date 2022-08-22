import { useEffect, useState } from "react"
import { Breadcrumb } from "../Breadcrumb/Breadcrumb"
import { SideNav } from "../Nav/SideNav"
import { ProductList } from "../Product/ProductList"
import axios from 'axios'


export const Main = () => {


    return (
        <main>
            <Breadcrumb />
            <SideNav />
            <ProductList />
        </main>
    )
}