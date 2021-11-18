import React, { Component } from 'react';
import { Avatar, Button, CssBaseline, FormControl, Paper, Typography, TextField } from '@material-ui/core/';
import LockIcon from '@material-ui/icons/LockOutlined';
import './Register.css'
import Swal from 'sweetalert2';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

class RegisterClient extends Component {
  constructor(props) {
    super(props);
    this.state = { url: 'https://ezbrowser.herokuapp.com/', confirmReister: true, email: '', user: '', number: '', username: '', password: '' }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    document.body.classList.add('registrar');
    return (
      

      <React.Fragment >
        <Box m="auto">
          <CssBaseline />
          <div className="layout registrar">
            <Paper className="paper registrar">
              <Avatar className="avatar registrar">
                <LockIcon />
              </Avatar>
              <Typography variant="h4">Regístrate como Cliente</Typography>
              
              <form className="form registrar" >
                <FormControl margin="normal" required fullWidth>
                  <TextField id="user" name="user" label="Nombre Completo" required value={this.state.user} onChange={this.handleAll} autoComplete="user" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <TextField id="email" name="email" label="Correo Electrónico" required value={this.state.email} onChange={this.handleAll} autoComplete="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <TextField id="username" name="username" label="Username" value={this.state.username} required onChange={this.handleAll} autoComplete="username" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <TextField name="number" type="number" id="number" required label="Número de Celular" value={this.state.number} onChange={this.handleAll} autoComplete="current-number" />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <TextField name="password" type="password" id="password" label="Contraseña" required value={this.state.password} onChange={this.handleAll} autoComplete="current-password" />
                </FormControl>
                {this.state.confirmReister ?
                  <Button onClick={this.handleSubmit} fullWidth variant="contained" color="primary" className="submit registrar">
                    Registrar
                  </Button>
                  :
                  <div><CircularProgress /></div>
                }
              </form>

            </Paper>
          </div>
        </Box>
      </React.Fragment>
    );
  }

  onSubmit = () => {
    const { history } = this.props;
    history.push('/login');
  }

  handleAll = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async handleSubmit(e) {
    const { history } = this.props;
    this.setState({ confirmReister: false });
    var f = "@";
    console.log(this.state.email);
    e.preventDefault();
    if (!this.state.email || !this.state.user || !this.state.username || !this.state.address || !this.state.confirmPassword || !this.state.password || !this.state.number) {
      Swal.fire("Faltó ingresar un dato", "Por favor ingrese todos los datos", "error");
    } else if (!this.state.email.includes(f)) {
      Swal.fire("Correo Electrónico ingresado erróneamente.", "Por favor ingrese un Correo Electrónico válido.", "error");
    } else if (this.state.password !== this.state.confirmPassword) {
      Swal.fire("Las contraseñas ingresadas no coinciden.", "Por favor ingrese de nuevo las contraseñas y verifique que sean las mismas.", "error");
    } else {
      await axios.post(this.state.url + 'auth/addUser', {
        user: this.state.user,
        nombreCompleto: this.state.user,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        numero: this.state.number
      },
      )
        .then(async function (response) {
          console.log(response.status);
          console.log(response.data);
          if (response.status === 200) {
            await Swal.fire(
              'Cuenta creada satisfactoriamente',
              'Será redireccionado a la página de Inicio de Sesión',
              'success'
            )

            history.push('/login');
          } else {
            Swal.fire("Inicio de Sesión fallido", "Por favor intente nuevamente", "error");
          }

        })
        .catch(function (error) {
          console.log(error);
        });
    }
    this.setState({ confirmReister: true });
  }
}
export default RegisterClient;