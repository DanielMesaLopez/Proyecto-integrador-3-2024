import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [adminCount, setProductos] = useState();
  const [employeeCount, setusuario] = useState();
  const [salary, setcotizacion] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3300/Consultar/Producto")
      .then((res) => {
        setProductos(res.data[0].admin);
      })
      .catch((err) => console.log(err));

    axios
      .get('"http://localhost:3300/Consultar/Usuario')
      .then((res) => {
        setusuario(res.data[0].employee);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3300/Consultar/Cotizacion")
      .then((res) => {
        setcotizacion(res.data[0].sumOfSalary);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
}

export default Home;
