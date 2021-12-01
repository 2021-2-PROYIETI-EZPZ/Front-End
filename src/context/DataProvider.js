import React, { createContext, useState, useEffect, Component } from "react";
import axios from "axios";
//import Data from "..//Data2";

export const DataContext = createContext();//Constante para exportar

export const DataProvider = (props) => {

	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] = useState([])
	const [total, setTotal] = useState(0)
	var globalData;

	useEffect(() => {
		axios.get("https://ezbrowser.herokuapp.com/ezpz/v1/crawler/asus").then((response) => {
			console.log(response);
			setProductos(response.data);
		});
	}, []);


	const filterProducts = (name) => {
		var veri = productos.filter((lista) => {
			if (lista.title.toString().includes(name)) {
				
				return lista;
			}
		});
		setProductos(veri);
	}
	const actualizaProductos = (search) => {
		axios.get("https://ezbrowser.herokuapp.com/ezpz/v1/crawler/"+search).then((response) => {
			console.log(response);
			setProductos(response.data);
		});
	}

	const addCarrito = (title) => {
		const check = carrito.every(item => {
			return item.title !== title

		})
		if (check) {
			const data = productos.filter(producto => {
				return producto.title === title
			})
			setCarrito([...carrito, ...data])
		} else {
			alert("El producto se ha añadido al carrito")
		}
	}
	useEffect(() => {
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if (dataCarrito) {
			setCarrito(dataCarrito)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	}, [carrito])

	useEffect(() => {
		const getTotal = () => {
			const res = carrito.reduce((prev, item) => {
				return prev + (item.price * 5)
			}, 0)
			setTotal(res)
		}
		getTotal()
	}, [carrito])

	const value = {
		productos: [productos],
		menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		filterProducts: filterProducts,
		actualizaProductos:actualizaProductos,
		total: [total, setTotal]
	}


	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)

};
