import React from "react";
import "./Navbar.scss";
import logo from "../images/logo-panorama.png";

function Navbar(props) {
  const scrollToServices = () => {
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToProcedure = () => {
    window.scrollTo({
      top: 1840,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    window.scrollTo({
      top: 2890,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="nav">
      <img className="nav__logo" src={logo} alt="Logo" />

      <ul className="nav__list">
        <li>
          <button className="nav__list--link" onClick={scrollToServices}>
            SERVICES
          </button>
        </li>
        <li>
          <button className="nav__list--link" onClick={scrollToProcedure}>
            PROCEDURE
          </button>
        </li>
        <li>
          <button className="nav__list--link" onClick={scrollToProjects}>
            PROJECTS
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
