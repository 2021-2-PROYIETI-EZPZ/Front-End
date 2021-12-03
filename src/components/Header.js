import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export const Header = () => {
  let correo = sessionStorage.getItem("correo")
  console.log("hello: " + correo);
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;
  const [busqueda, setBusqueda] = useState("")
  const addCarrito = value.filterProducts;
  const actualizaProductos = value.actualizaProductos;

  const handleChange = e => {
    setBusqueda(e.target.value);
  }
  const toogleMenu = () => {
    setMenu(!menu)
  }

  if (correo != null) {
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
            <Link to="/login">hola ${correo}</Link>
          </li>
          <li>
            <Link to="/RegisterUser">Update</Link>
          </li>
          <li>
            <Link to="/home">Acerca de</Link>
          </li>
          <li>
            <button onClick={() => cerrarSesion()} className="btn btn-light">Cerrar Sesión</button>
          </li>
        </ul>
        <div className="containerInput">
          <ul>
            <li>
              <input
                className="form-control inputBuscar"
                value={busqueda}
                placeholder="Busqueda por nombre de producto"
                onChange={handleChange}
              />
            </li>
            <li>
              <button onClick={() => actualizaProductos(busqueda)} className="btn btn-success"><box-icon name="search"></box-icon></button>
            </li>
          </ul>

        </div>
        <div className="cart" onClick={toogleMenu}>
          <box-icon name="heart"></box-icon>
          <span className="item__total"> {carrito.length} </span>
        </div>
        <br></br>
      </header>
    );
  } else {
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
            <Link to="/login">Iniciar Sesión</Link>
          </li>
          <li>
            <Link to="/RegisterUser">Registrate</Link>
          </li>
          <li>
            <Link to="/home">Acerca de</Link>
          </li>
        </ul>
        <div className="containerInput">
          <ul>
            <li>
              <input
                className="form-control inputBuscar"
                value={busqueda}
                placeholder="Busqueda por nombre de producto"
                onChange={handleChange}
              />
            </li>
            <li>
              <button onClick={() => actualizaProductos(busqueda)} className="btn btn-success"><box-icon name="search"></box-icon></button>
            </li>
          </ul>

        </div>

        <br></br>
      </header>
    );
  }

};

const cerrarSesion = () => {
  sessionStorage.clear();
  window.location.href="/Search";
}
