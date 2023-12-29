import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <>
      <section className="header">
        <div className="header__container">
          <h1 className="header__container--text">
            Build the <span className="header__container--span">panorama</span>
            you want to experience
          </h1>
        </div>
      </section>
    </>
  );
}

export default Header;
