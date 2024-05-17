import React from "react";
//css
import "../assets/css/Login.css";
//imagen
import icono from "../assets/css/img/icono.png";
//servicios
import { Apiurl } from "../apirest";

//librerias
import axios from "axios";

class Login extends React.Component {
  state = {
    form: {
      correo_usuario: "",
      contrasena_usuario: "",
    },
    error: false,
    errorMsg: "",
  };

  manejadorSubmit = (e) => {
    e.preventDefault();
  };

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    //console.log(this.state.form);
  };

  manejadorBoton = () => {
    let url = Apiurl;
    axios.get(url, this.state.form).then((response) => {
      if (response.data.status === "ok") {
      } else {
        this.setState({
          error: true,
          errorMsg: response.data.results,
        });
      }
    });
    console.log("enviado");
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <br />
              <br />
              <img src={icono} width="100px" alt="User Icon" />
              <br />
              <br />
            </div>

            <form onSubmit={this.manejadorSubmit}>
              <input
                type="text"
                className="fadeIn second"
                name="correo_usuario"
                placeholder="Usuario"
                onChange={this.manejadorChange}
              />
              <input
                type="password"
                className="fadeIn third"
                name="contrasena_usuario"
                placeholder="Contraseña"
                onChange={this.manejadorChange}
              />
              <input
                type="submit"
                className="fadeIn fourth"
                value="Log In"
                onClick={this.manejadorBoton}
              />
            </form>

            <div id="formFooter">
              <a
                className="underlineHover"
                href="http://localhost:5173/ForgotPassword"
              >
                Has olvidado tu contraseña?
              </a>
              <div class="Registro-Login">
                <a href="http://localhost:5173/Registro">Registro</a>
              </div>
              {this.state.error === true && (
                <div className="alert alert-danger" role="alert">
                  {this.state.errorMsg}
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
