import React from 'react';
import './login.css';
import { withStyles, TextField, MenuItem, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import logo from '../../logo.png';
import axios from 'axios';
import Swal from 'sweetalert2';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    link: {
        width: 10,
        color: '#3f51b5',
    },
    icon: {
        width: 40,
        height: 40,
        color: '#3f51b5',
    },
    register: {
        position: "static",
        marginRight: "10%",
    },
    formControl: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(0),
    },
    textField: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
});

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loginConfirm: true, user: '', password: '', rol: '', dashboardVendedor: false, dashboardCliente: false, showPassword: false };
    }

    componentWillUnmount() {
        document.body.classList.remove("login")
    }

    handleUserChange = (e) => {
        this.setState({
            user: e.target.value
        });
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    handleRolChange = (e) => {
        this.setState({
            rol: e.target.value
        });
    };
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    handleSubmit = async () => {
        const { history } = this.props;
        this.setState({ loginConfirm: false });
        let redirrect = "";
        if (this.state.rol && this.state.user && this.state.password) {
            if (this.state.rol === 'cliente') {
                redirrect = '/clientDashboard';
            } else {
                redirrect = '/sellerDashboard';
            }
            let rol = this.state.rol;
            await axios.post('https://ezbrowser.herokuapp.com/auth/login', {
                username: this.state.user,
                password: this.state.password,
                token: ""
            })
                .then(async function (response) {
                    // console.log(response.data);
                    if (response.status === 200) {
                        await Swal.fire(
                            'Bienvenid@ ',
                            'Será redireccionado al dashboard de ' + rol,
                            'success'
                        )
                        // guardar token e username logueado en localestorage
                        var user = response.data;
                        await localStorage.setItem('user', JSON.stringify(user));
                        // redireccionar
                        history.push(redirrect);
                    } else {
                        Swal.fire(
                            'Datos ingresados erróneamente',
                            'Por favor verifique nuevamente los datos ingresados',
                            'error'
                        )

                    }

                }).catch(function (error) {
                    console.log(error);
                    Swal.fire(
                        'Datos ingresados erróneamente',
                        'Por favor verifique nuevamente los datos ingresados',
                        'error'
                    )
                });

        } else {
            Swal.fire(
                'Datos ingresados erróneamente',
                'Por favor verifique nuevamente los datos ingresados',
                'error'
            )
        }
        this.setState({ loginConfirm: true });
    };

    render() {
        const { classes } = this.props;
        document.body.classList.add('login');
        return (

            <div className="fondo login">
                <Box m="auto">

                    <form className="form login" >
                        <br></br>
                        <div>
                            <img src={logo} width="60px" height="60px" margin="auto" alt="Logo" />
                        </div>
                        <h2>Iniciar Sesión</h2>
                        <br></br>
                        <div className="text login">
                            <div>
                                <TextField variant="outlined" id="username" label="Correo Electrónico" type="email"
                                    onChange={this.handleUserChange} fullWidth autoFocus required />
                            </div>
                            <br></br>
                            <div >
                                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                                    <OutlinedInput fullWidth label="Password"
                                        id="outlined-adornment-password-login"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        value={this.state.password}
                                        name="password"
                                        autoComplete="off"
                                        onChange={this.handlePasswordChange}

                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                    onMouseDown={this.handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>

                            </div >
                            <br></br>
                            <div>
                                <TextField variant="outlined" id="select" label="Rol" select required fullWidth
                                    onChange={this.handleRolChange}>
                                    <MenuItem value="pasajero">Cliente</MenuItem>
                                    <MenuItem value="conductor">Vendedor</MenuItem>
                                </TextField>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Box m="auto">
                            <center>
                                <tr>

                                    <div>
                                        {this.state.loginConfirm ?
                                            <Button color="primary" variant="contained" className="submit" onClick={this.handleSubmit}>
                                                Entrar
                                    </Button>
                                            :
                                            <div><CircularProgress /></div>
                                        }
                                    </div>

                                </tr>
                            </center>
                        </Box>
                        <br></br>
                        <div >
                            <Link color="secondary" className={classes.link} aria-current="page"
                                to={{ pathname: "/RegisterUser" }}>
                                <HowToRegIcon className={classes.icon} />
                                <br /> Regístrate
                            </Link>
                        </div>

                    </form>

                </Box>
            </div>


        );
    }
}

export default withStyles(styles)(Login);