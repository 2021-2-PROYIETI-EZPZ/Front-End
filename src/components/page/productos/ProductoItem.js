import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";
import data from "../../../Data2";

export const ProductoItem = ({ title, price, url,img,site}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;



  return (

    <div key={title} className="producto">
      <Link to={`/producto/${title}`}>
        <div className="producto__img">
          
          <img src={"data:image/png;base64,"+img} alt={title} />
        </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(title)} className="btn">Añadir a favoritos</button>
        <div>
          <Link to={`/producto/${url}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};
