import React from 'react'
import Prueba from './prueba'
import { Header } from '../Header'
import { Carrito } from '../Carrito'
import Pages from '../Page'
import './prueba.css';
import { ProductosList } from "../page/productos/index";
import { DataProvider } from '../../context/DataProvider'
import { BrowserRouter as Router } from "react-router-dom";
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
