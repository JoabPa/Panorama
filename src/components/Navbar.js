import React from "react";
import "./Navbar.scss";
import logo from "../images/logo.png";

function Navbar(props) {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="Logo" />
      <span>Services</span>
      <span>Projects</span>
      <div className="btn--contactus">Contact Us</div>
    </nav>
  );
}

export default Navbar;
