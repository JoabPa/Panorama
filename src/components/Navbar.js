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

      <div className="nav__right">
        <ul className="nav__list">
          <li>
            <btn className="nav__list--link" onClick={scrollToServices}>
              SERVICES
            </btn>
          </li>
          <li>
            <btn className="nav__list--link" onClick={scrollToProcedure}>
              PROCEDURE
            </btn>
          </li>
          <li>
            <btn className="nav__list--link" onClick={scrollToProjects}>
              PROJECTS
            </btn>
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
