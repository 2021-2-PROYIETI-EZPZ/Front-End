import React from 'react';
import './login.css';
import { withStyles, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import logo from '../../logo.png';
import axios from 'axios';
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
import Swal from 'sweetalert2';

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
        this.state = { url: 'https://ezbrowser.herokuapp.com/ezpz/v1/client/', loginConfirm: true, email: '', password: '', dashboardCliente: false, showPassword: false };
    }

    componentWillUnmount() {
        document.body.classList.remove("login")
    }

    handleUserChange = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    }

    handleSubmit = async () => {
        this.setState({ loginConfirm: false });
        console.log(this.state.email);
        console.log(this.state.password);

        sessionStorage.setItem("correo", this.state.email);
        let correo = sessionStorage.getItem("correo")
        console.log("usuarios: "+correo);
         

        await axios.get('https://ezbrowser.herokuapp.com/ezpz/v1/client/login',{            
            params: {
                email: this.state.email, 
                password: this.state.password
            },
        })
            .then(async function (response) {
                //console.log(response.data);
                if (response.data === true){
                    window.location.replace("http://localhost:3000/search");
                }
            }).catch(function (error){
                console.log(error);
                Swal.fire(
                    'Datos ingresados erróneamente',
                    'Por favor verifique nuevamente los datos ingresados',
                    'error'
                )
            })
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
                        </div>
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