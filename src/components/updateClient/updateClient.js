import React, { Component } from 'react';
import { Avatar, Button, CssBaseline, FormControl, Paper, Typography, TextField } from '@material-ui/core/';
import LockIcon from '@material-ui/icons/LockOutlined';
import './Update.css'
import Swal from 'sweetalert2';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

let correo = sessionStorage.getItem("correo")

class update extends Component{
    constructor(props) {
        super(props);
        this.state = { url: 'https://ezbrowser.herokuapp.com/' , confirmReister: true, name: '', username: '', phoneNumber: '', }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render (){
    let correo = sessionStorage.getItem("correo")
    

        return(
            <React.Fragment >
            <Box m="auto">
            <CssBaseline />
            <div className="layout registrar">
            <Paper className="paper registrar">
                    <Avatar className="avatar registrar">
                    <LockIcon />
                    </Avatar>
                    <Typography variant="h4">Actualiza</Typography>
                    <form className="form registrar" >
                    <FormControl margin="normal" required fullWidth>
                        <TextField id="name" name="name" label="Nombre Completo" required value={this.state.name} onChange={this.handleAll} autoComplete="name" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <TextField id="username" name="username" label="Username" value={this.state.username} required onChange={this.handleAll} autoComplete="username" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <TextField name="phoneNumber" id="phoneNumber" required label="Número de Celular" value={this.state.phoneNumber} onChange={this.handleAll} autoComplete="phoneNumber" />
                    </FormControl>
                    {this.state.confirmReister ?
                        <Button onClick={this.handleSubmit} fullWidth variant="contained" color="primary" className="submit registrar">
                        Actualizar
                        </Button>
                        :
                        <div><CircularProgress /></div>
                    }
                    </form>
                </Paper>
                </div>
                </Box>
            </React.Fragment>
            )

    }



  handleAll = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit(e) {
    this.setState({ confirmReister: false });
    e.preventDefault();
    console.log("este es el coreooooooooooooooooooooooo: "+correo);
    console.log(this.state.name);

    if (!this.state.name || !this.state.username || !this.state.phoneNumber) {
      Swal.fire("Faltó ingresar un dato", "Por favor ingrese todos los datos", "error");
    } else {
      await axios.put(this.state.url + 'ezpz/v1/client/'+ correo, {
        name: this.state.name,       
        phoneNumber: this.state.phoneNumber,        
        username: this.state.username,
      },
      )
        .then(async function (response) {
          if (response.status === 200) {
            await Swal.fire(
              'Cuenta Actualiza correctamente!',
              'Será redireccionado a la página home',
              'success'
            )
            window.location.replace("https://ezbrowser-frontend.herokuapp.com/search");
          } else {
            Swal.fire("Fallo", "error");
          }

        })
        .catch(function (error) {
          console.log(error);
        });
    }
    this.setState({ confirmReister: true });
  }

}

export default update;