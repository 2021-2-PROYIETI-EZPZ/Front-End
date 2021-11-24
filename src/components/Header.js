import React, { useContext, useState, useEffect} from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;
  const [busqueda, setBusqueda]= useState("")
  const addCarrito = value.filterProducts;

  const handleChange=e=>{
    setBusqueda(e.target.value);
    console.log("Busqueda: "+e.target.value);
    addCarrito(e.target.value);
    
  }
  const toogleMenu = () =>{
    setMenu(!menu)
  }


  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
        <box-icon name="home" width="150"></box-icon>
        
      </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="heart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
      <div className="containerInput">
        <input 
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Busqueda por nombre de producto"
          onChange={handleChange}
        />
        <button className="btn btn-success">
        <box-icon name="search"></box-icon>
        </button>
      </div>
    </header>
  );
};
