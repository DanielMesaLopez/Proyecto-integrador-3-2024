import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const Usuario = () => {
  const [id_usuario, setIdusuario] = useState("");
  const [id_ciudad, setIdCiudad] = useState("");
  const [nombre_usuario, setNombre_usuario] = useState("");
  const [direccion, setDireccion] = useState("");
  const [estado, setEstado] = useState("");
  const [contrasena_usuario, setContrasena_usuario] = useState("");
  const [correo_usuario, setCorreo_usuario] = useState("");
  const [telefono_usuario, setTelefono_usuario] = useState("");

  const [editar, setEditar] = useState(false);

  //constante para get hacer una lista
  const [usuariosList, setusuario] = useState([]);

  //metodo post
  const add = () => {
    Axios.post("http://localhost:3300/Insertar/Usuario", {
      id_usuario: id_usuario,
      id_ciudad: id_ciudad,
      nombre_usuario: nombre_usuario,
      direccion: direccion,
      estado: estado,
      contrasena_usuario: contrasena_usuario,
      correo_usuario: correo_usuario,
      telefono_usuario: telefono_usuario,
    }).then(() => {
      getUsuario();
      limpiar();
      Swal.fire({
        title: "<strong>Registro exitoso!</strong>",
        html:
          "<i>El Usuario <strong>" +
          direccion +
          "</strong> fue registrado con exito!</i>",
        icon: "success",
        timer: 3000,
      });
    });
  };

  //metodo get
  const getUsuario = () => {
    Axios.get("http://localhost:3300/Consultar/Usuario").then((response) => {
      setusuario(response.data);
      // alert("usuario en listados");
    });
  };
  getUsuario();

  //metodo put
  const editarusuario = (val) => {
    setEditar(true);
    setIdusuario(val.id_usuario);
    setIdCiudad(val.id_ciudad);
    setNombre_usuario(val.nombre_usuario);
    setDireccion(val.direccion);
    setEstado(val.estado);
    setContrasena_usuario(val.contrasena_usuario);
    setCorreo_usuario(val.correo_usuario);
    setTelefono_usuario(val.telefono_usuario);
  };

  const update = () => {
    Axios.put("http://localhost:3300/Actualizar/Usuario", {
      id_usuario: id_usuario,
      id_ciudad: id_ciudad,
      nombre_usuario: nombre_usuario,
      direccion: direccion,
      estado: estado,
      contrasena_usuario: contrasena_usuario,
      correo_usuario: correo_usuario,
      telefono_usuario: telefono_usuario,
    }).then(() => {
      getUsuario();
      limpiar();
      Swal.fire({
        title: "<strong>Actualizacion exitosa!</strong>",
        html:
          "<i>El Usuario <strong>" +
          direccion +
          "</strong> fue actualizado con exito!</i>",
        icon: "success",
        timer: 3000,
      });
    });
  };

  const limpiar = () => {
    setIdusuario("");
    setIdCiudad("");
    setNombre_usuario("");
    setDireccion("");
    setEstado("");
    setContrasena_usuario("");
    setCorreo_usuario("");
    setTelefono_usuario("");
    setEditar(false);
  };

  //metodo eliminar

  const deleteusuario = (val) => {
    Swal.fire({
      title: "Confirmar eliminación",
      html:
        "<i>Realmente desea eliminar a <strong>" +
        val.direccion +
        "</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3300/Delete/Usuario/${val.id_usuario}`)
          .then(() => {
            getUsuario();
            limpiar();
            Swal.fire({
              icon: "success",
              title: val.direccion + " fue eliminado.",
              showConfirmButton: false,
              timer: 2000,
            });
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se logró eliminar el producto sube el BACK!!",
              footer:
                JSON.parse(JSON.stringify(error)).message === "Network Error"
                  ? "Intente más tarde"
                  : JSON.parse(JSON.stringify(error)).message,
            });
          });
      }
    });
  };

  return (
    <div className="container">
      <div className="card text-center">
        <div className="card-header">GESTIÓN DE USUARIOS</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              ID USUARIOS:
            </span>
            <input
              type="number"
              value={id_usuario}
              onChange={(event) => {
                setIdusuario(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese Id de usuarios"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              ID CIUDAD:
            </span>
            <input
              type="number"
              value={id_ciudad}
              onChange={(event) => {
                setIdCiudad(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese Id de ciudad"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Nombre de usuario:
            </span>
            <input
              type="text"
              value={nombre_usuario}
              onChange={(event) => {
                setNombre_usuario(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese el nombre de usuario"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Dirección:
            </span>
            <input
              type="text"
              value={direccion}
              onChange={(event) => {
                setDireccion(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese la direccion"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Estado:
            </span>
            <input
              type="number"
              value={estado}
              onChange={(event) => {
                setEstado(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese el estado"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Contraseña:
            </span>
            <input
              type="text"
              value={contrasena_usuario}
              onChange={(event) => {
                setContrasena_usuario(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese la contraseña"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Correo electronico:
            </span>
            <input
              type="text"
              value={correo_usuario}
              onChange={(event) => {
                setCorreo_usuario(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese el correo del usuario"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Telefono:
            </span>
            <input
              type="number"
              value={telefono_usuario}
              onChange={(event) => {
                setTelefono_usuario(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese el Telefono de Usuario"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="card-footer text-muted">
          {editar ? (
            <div>
              <button className="btn btn-warning m-2" onClick={update}>
                Actualizar
              </button>{" "}
              <button className="btn btn-info m-2" onClick={limpiar}>
                Cancelar
              </button>
            </div>
          ) : (
            <button className="btn btn-success" onClick={add}>
              Registrar
            </button>
          )}
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id_usuario</th>
            <th scope="col">id_ciudad</th>
            <th scope="col">nombre_usuario</th>
            <th scope="col">direccion</th>
            <th scope="col">estado</th>
            <th scope="col">contrasena_usuario</th>
            <th scope="col">correo_usuario</th>
            <th scope="col">telefono_usuario</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosList.map((val, key) => {
            return (
              <tr key={val.id_usuario}>
                <th>{val.id_usuario}</th>
                <td>{val.id_ciudad}</td>
                <td>{val.nombre_usuario}</td>
                <td>{val.direccion}</td>
                <td>{val.estado}</td>
                <td>{val.contrasena_usuario}</td>
                <td>{val.correo_usuario}</td>
                <td>{val.telefono_usuario}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        editarusuario(val);
                      }}
                      className="btn btn-info"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        deleteusuario(val);
                      }}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Usuario;
