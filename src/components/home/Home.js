import React, { Component } from 'react';
import './Home.css';

import search from './search.jpg';
import browse from './browse.jpg';
import secure from './secure.png';
import money from './money.png';
import product from './product.png';
import Grid from '@material-ui/core/Grid';
import { TextField, MenuItem } from '@material-ui/core';     

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    document.body.classList.add('home');
    return ( 
      <div >
        <section id="home" className="home">
          <div id="discover">
            <img id="discoverimg" src={browse} alt="discover quickmobility" />
            <header className="home">
              <div>
                <h1 className="home"> Ez Browser 🔍 </h1>
              </div>
              <div className="header-right">
                <a href="/login">Ingresar</a>
                <div>
                  
                  <TextField variant="outlined" label="Registrate" select required fullWidth
                    onChange={this.handleRolChange}>
                    <MenuItem value="cliente"><a href="/RegisterUser">Registro Vendedor</a></MenuItem>
                    <MenuItem value="vendedor"><a href="/RegisterClient">Registro Cliente</a></MenuItem>
                  </TextField>
                </div>
                <a href="#about">Acerca de</a>
              </div>
            </header>
            <div id="slogan" className="centered">
              <p>La aplicación que nadie pidió, pero que todos necesitan.</p>
            </div>
          </div>
        </section>
        <section id="about" className="home">
          <div id="info" className="gridcont">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h2 className="home"> ¿Quienes somos? </h2>
                <p>Somos una plataforma web donde los usuarios pueden buscar cualquier tipo de producto que estén interesados en comprar. La plataforma recopila los productos buscados por el usuario en todas las tiendas, comparando precios y mostrando la mejor opción con el mejor precio, ahorrándole tiempo al cliente de tener que recurrir a buscar página por página mirando precios, Ez Browser lo hace automáticamente para tener una mejor Experiencia en compras.</p>
              </Grid>
              <Grid item xs={6} className="cuadro">
                <img src={search} alt="cuadro quickmobility" />
              </Grid>
            </Grid>
          </div>
        </section>
        <section id="ls" className="home">
          <div id="otros" className="gridcont">
            <Grid container spacing={3}>
              <Grid item xs>
                <h3 className="home"> Busca de forma más segura </h3>
                <p> Podrás buscar tu producto sin necesidad de ingresar a distintas páginas web inseguras. </p>
                <img src={secure} className="valores" alt="container descripcion" />
              </Grid>
              <Grid item xs>
                <h3 className="home"> Ahorra Dinero </h3>
                <p> Pagarás un valor más económico en comparación a otras páginas web. </p>
                <img src={money} className="valores" alt="discover descripcion ahorro" />
              </Grid>
              <Grid item xs>
                <h3 className="home"> Encuentra tu producto favorito </h3>
                <p> Disfruta de una gran variedad de productos que se adapten a tus necesidades. </p>
                <img src={product} className="valores" alt="discover descripcion personas" />
              </Grid>
            </Grid>
          </div>

        </section>
        <a id="upbutton" href="/#"> <i className="fa fa-arrow-circle-up"></i></a>

      </div>
    )
  }
}



export default Home;