import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const Cotizacion = () => {
  const [id_cotizacion, setIdcotizacion] = useState("");
  const [fecha_cotizacion, setFecha_cotizacion] = useState("");
  const [descuento, setDescuento] = useState("");
  const [tipo_descuento, setTipo_Descuento] = useState("");
  const [Valor_total, setValor_Total] = useState("");
  const [estado, setEstado] = useState("");

  const [editar, setEditar] = useState(false);

  //constante para get hacer una lista
  const [cotizacionList, setcotizacion] = useState([]);

  //metodo post
  const add = () => {
    Axios.post("http://localhost:3300/Insertar/Cotizacion", {
      id_cotizacion: id_cotizacion,
      fecha_cotizacion: fecha_cotizacion,
      descuento: descuento,
      tipo_descuento: tipo_descuento,
      Valor_total: Valor_total,
      estado: estado,
    }).then(() => {
      getcotizacion();
      limpiar();
      Swal.fire({
        title: "<strong>Registro exitoso!</strong>",
        html:
          "<i>El cotizacion <strong>" +
          fecha_cotizacion +
          "</strong> fue registrado con exito!</i>",
        icon: "success",
        timer: 3000,
      });
    });
  };

  //metodo get
  const getcotizacion = () => {
    Axios.get("http://localhost:3300/Consultar/Cotizacion").then((response) => {
      setcotizacion(response.data);
      // alert("cotizacion en listados");
    });
  };
  getcotizacion();

  //metodo put
  const editorcotizacion = (val) => {
    setEditar(true);
    setIdcotizacion(val.id_cotizacion);
    setFecha_cotizacion(val.fecha_cotizacion);
    setDescuento(val.descuento);
    setTipo_Descuento(val.tipo_descuento);
    setValor_Total(val.Valor_total);
    setEstado(val.estado);
  };

  const update = () => {
    Axios.put("http://localhost:3300/Actualizar/Cotizacion", {
      id_cotizacion: id_cotizacion,
      fecha_cotizacion: fecha_cotizacion,
      descuento: descuento,
      tipo_descuento: tipo_descuento,
      Valor_total: Valor_total,
      estado: estado,
    }).then(() => {
      getcotizacion();
      limpiar();
      Swal.fire({
        title: "<strong>Actualizacion exitosa!</strong>",
        html:
          "<i>El cotizacion <strong>" +
          fecha_cotizacion +
          "</strong> fue actualizado con exito!</i>",
        icon: "success",
        timer: 3000,
      });
    });
  };

  const limpiar = () => {
    setIdcotizacion("");
    setFecha_cotizacion("");
    setDescuento("");
    setTipo_Descuento("");
    setValor_Total;
    setEstado("");
    setEditar(false);
  };

  //metodo eliminar

  const deletecotizacion = (val) => {
    Swal.fire({
      title: "Confirmar eliminación",
      html:
        "<i>Realmente desea eliminar a <strong>" +
        val.fecha_cotizacion +
        "</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(
          `http://localhost:3300/Delete/Cotizacion/${val.id_cotizacion}`
        )
          .then(() => {
            getcotizacion();
            limpiar();
            Swal.fire({
              icon: "success",
              title: val.fecha_cotizacion + " fue eliminado.",
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
        <div className="card-header">GESTIÓN DE COTIZACION</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Id cotización:
            </span>
            <input
              type="number"
              value={id_cotizacion}
              onChange={(event) => {
                setIdcotizacion(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese Id de cotización"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Fecha de cotización:
            </span>
            <input
              type="text"
              value={fecha_cotizacion}
              onChange={(event) => {
                setFecha_cotizacion(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese fecha_cotizacion"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Descuento:
            </span>
            <input
              type="text"
              value={descuento}
              onChange={(event) => {
                setDescuento(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese descuento"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Tipo de descuento:
            </span>
            <input
              type="text"
              value={tipo_descuento}
              onChange={(event) => {
                setTipo_Descuento(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese la fecha de pago"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Valor de descuento:
            </span>
            <input
              type="datetime"
              value={Valor_total}
              onChange={(event) => {
                setValor_Total(event.target.value);
              }}
              className="form-control"
              placeholder="Ingrese el valor total"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Estado:
            </span>
            <input
              type="text"
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
            <th scope="col">id_cotizacion</th>
            <th scope="col">fecha_cotizacion</th>
            <th scope="col">descuento</th>
            <th scope="col">tipo_descuento</th>
            <th scope="col">Valor_total</th>
            <th scope="col">estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cotizacionList.map((val, key) => {
            return (
              <tr key={val.id_cotizacion}>
                <th>{val.id_cotizacion}</th>
                <td>{val.fecha_cotizacion}</td>
                <td>{val.descuento}</td>
                <td>{val.tipo_descuento}</td>
                <td>{val.Valor_total}</td>
                <td>{val.estado}</td>
                <td>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        editorcotizacion(val);
                      }}
                      className="btn btn-info"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        deletecotizacion(val);
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

export default Cotizacion;
