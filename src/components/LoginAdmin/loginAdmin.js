import React from 'react';
import img from './../images/img-01.png';
import './loginAdmin.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import CircularProgress from '@material-ui/core/CircularProgress';

class loginAdmin extends React.Component 
{
	state = { url: 'http://localhost:8080/ezpz/v1/auth/', loginConfirm: true, email: '', password: '', dashboardAdmin: false, showPassword: false };

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

	handleSubmit = async () => {
        this.setState({ loginConfirm: false });
		console.log("Antes del POST");
        await axios.post(this.state.url + 'loginAdmin',{            
            email: this.state.email, 
            password: this.state.password,
        })
            .then(async function (response) {
				console.log("Después del then");
				console.log(response.data);
				console.log(response);
                if (response.status === 200){
					Swal.fire(
						'Datos ingresados correctamente',
  						'Haz iniciado sesión',
  						'success'
					)
					//console.log("Funciona :3");
					window.location.href = "http://localhost:3000/homeAdmin";
                    //window.location.replace("http://localhost:3000/");
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

    render(){
    return (
        <div>
            <div class="limiter">
				<div class="container-login100">
					<div class="wrap-login100">
						<div class="login100-pic js-tilt" data-tilt>
							<img src={img} alt="IMG"></img>
						</div>
						<form className = "loginAdmin">
							<span class="login100-form-title">
								Administrador
							</span>
							<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
								<input class="input100" type="text" name="email" placeholder="Email" onChange={this.handleUserChange}></input>
								<span class="focus-input100"></span>
								<span class="symbol-input100">
									<i class="fa fa-envelope" aria-hidden="true"></i>
								</span>
							</div>
							<div class="wrap-input100 validate-input" data-validate = "Password is required">
								<input class="input100" type="password" name="pass" placeholder="Password" onChange={this.handlePasswordChange}></input>
								<span class="focus-input100"></span>
								<span class="symbol-input100">
									<i class="fa fa-lock" aria-hidden="true"></i>
								</span>
							</div>
							<div>
								{this.state.loginConfirm ?
									<button class="login100-form-btn" onClick={this.handleSubmit}>
										Login
									</button>
									:
									<div><CircularProgress /></div>
								}
							</div>
						</form>
					</div>
				</div>
			</div>
        </div>
    );
    }
}

export default loginAdmin;