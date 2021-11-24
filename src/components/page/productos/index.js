import React, { useContext } from 'react'
import { DataContext } from "../../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";

export const ProductosList = () => {
	const value = useContext(DataContext)
	const [productos] = value.productos;
	return (
		<>
			<h1 className="produ">PRODUCTOS</h1>
			<div className="productos">
				{
					productos.map(producto => (
						<ProductoItem
							title={producto.title}
							price={producto.price}
							url={producto.url}
							img={producto.img}
							site={producto.site}
							//image={producto.image}
							//category={producto.category}
							//price={producto.price}
							//url={producto.img2}
							//id={producto.id}
						/>
					))
				}
			</div>
		</>
	)
}
