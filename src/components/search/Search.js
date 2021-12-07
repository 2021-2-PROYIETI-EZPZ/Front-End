import React from 'react'
import { Header } from '../Header'
import { Carrito } from '../Carrito'
import Pages from '../Page'
import './prueba.css';
import { ProductosList } from "../page/productos/index";
import { DataProvider } from '../../context/DataProvider'

let correo = sessionStorage.getItem("correo")
console.log("page: "+correo);

export const Search = () => {
    return (
        <DataProvider>
            <div>
                <Header />
                <Carrito />
                <Pages />
                <ProductosList/>
            </div>
        </DataProvider>

    )
}
