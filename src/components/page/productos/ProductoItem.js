import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";


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
        <p className="price">{price} </p>
        <p className="site">{site} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(title)} className="btn">Añadir a favoritos</button>
        <div>
        <button onClick={()=>window.location.href=url} className="btn">Vista</button>

          
        </div>
      </div>
    </div>
  );
};
