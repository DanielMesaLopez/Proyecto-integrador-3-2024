import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> Offimax
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Bienvenido
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Carrito">
            <BsCart3 to="/Carrito" className="icon" /> Carrito
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Productos">
            <BsFillArchiveFill to="/Productos" className="icon" /> Productos
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Rol">
            <BsPeopleFill to="/Rol" className="icon" /> Rol
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Usuario">
            <BsPeopleFill className="icon" /> Usuario
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/Cotizacion">
            <BsListCheck className="icon" /> Cotizaciones
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/setting">
            <BsFillGearFill className="icon" /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
