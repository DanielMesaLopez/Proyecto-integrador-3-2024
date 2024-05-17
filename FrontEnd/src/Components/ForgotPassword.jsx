import React from "react";
import '../assets/css/ForgotPassword.css';

class ForgotPassword extends React.Component {

    manejadorBoton=()=>{
        
        console.log("correo enviado")
    }


    render() {
  return (
    <React.Fragment>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
         <div class="form-gap"></div>
         <div class="container">
            	<div class="row justify-content-center">
                    		<div class="col-md-4 col-md-offset-4">           
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <div class="text-center">
                                        <h3><i class="fa fa-lock fa-4x"></i></h3>
                  <h2 class="text-center">Has olvidado tu contraseña?</h2>
                  <p>Restablecer contraseña</p>
                  <div class="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" class="form" method="post">
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                          <input id="email" name="email" placeholder="email address" class="form-control"  type="email"/>
                        </div>
                      </div>
                      <div class="form-group ">
                                        <button type="button" class="btn btn-primary btn-lg btn-block login-button">Restablecer la contraseña</button>
                                    
                                    </div>
                                    <div class="login-ForgotPassword">
                                        <a href="http://localhost:5173/Login">Login</a>
                                    </div>
                    </form>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>

    </React.Fragment>
    
    );

  }
}

export default ForgotPassword;