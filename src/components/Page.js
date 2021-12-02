import React from "react";
import { Switch, Route, Routes} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos/index";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Routes>
				<Route path="/searchs" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
			</Routes>
    </section>
  );
}
