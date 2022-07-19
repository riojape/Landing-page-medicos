import React from "react";
import "../css/Navbar.css";

const Navbar = ({ menu }) => {
  return (
    <div className={`navbar ${!!menu && "navbar-active"}`}>
      <ul>
        <li>
          <a href="#">Especialistas</a>
        </li>
        <li>
          <a href="#">Estudios</a>
        </li>
        <li>
          <a href="#">Preguntas frecuentes</a>
        </li>
      </ul>
      <button className="btn btn-navbar">Iniciar sesión</button>
    </div>
  );
};

export default Navbar;
