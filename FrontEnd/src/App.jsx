import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Productos from "./Crud/Productos";
import Usuario from "./Crud/Usuario";
import Carrito from "./Crud/Carrito";
import Cotizacion from "./Crud/Cotizacion";
import Rol from "./Crud/Rol";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import ForgotPassword from "./Components/ForgotPassword";
import "./App.css";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
        <div className="grid-container">
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          />
          <Routes>
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Usuario" element={<Usuario />} />
            <Route path="/Cotizacion" element={<Cotizacion />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Rol" element={<Rol />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
