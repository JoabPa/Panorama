import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <>
      <section className="header">
        <div className="header__container">
          <h1 className="header__container--title">panorama</h1>

          <span className="header__container--text realistic-marker-highlight">
            Quality service meets affordable prices
          </span>
        </div>
        <svg
          xmlns="//www.w3.org/2000/svg"
          version="1.1"
          className="svg-filters"
          style={{ display: "none" }}
        >
          <defs>
            <filter id="marker-shape">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0 0.15"
                numOctaves="1"
                result="warp"
              />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="30"
                in="SourceGraphic"
                in2="warp"
              />
            </filter>
          </defs>
        </svg>
      </section>
    </>
  );
}

export default Header;
