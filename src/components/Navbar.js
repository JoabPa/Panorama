import React from "react";
import "./Navbar.scss";
import logo from "../images/logo-panorama.png";

function Navbar(props) {
  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="Logo" />

      <div className="nav__right">
        <ul className="nav__list">
          <li>
            <a href="https://github.com" className="nav__list--link">
              SERVICES
            </a>
          </li>
          <li>
            <a href="https://github.com" className="nav__list--link">
              PROCEDURE
            </a>
          </li>
          <li>
            <a href="https://github.com" className="nav__list--link">
              PROJECTS
            </a>
          </li>
        </ul>
      </div>

      <a href="https://github.com" className="nav__list--btn">
        <span className="nav__list--btn-text">GET IN TOUCH</span>
      </a>
    </nav>
  );
}

export default Navbar;
