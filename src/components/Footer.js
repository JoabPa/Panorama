import React from "react";
import "./Footer.scss";
import logo from "../images/logo-panorama.png";
import icon1 from "../images/PNG/number.png";

function Footer() {
  return (
    <>
      <div className="wave">
        <svg
          className="wave__waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(44, 84, 44,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(44, 84, 44,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(44, 84, 44,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(44, 84, 44)" />
          </g>
        </svg>
      </div>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__container--left">
            <div className="footer__container--left-logo">
              <img className="logo" alt="logo" src={logo}></img>
            </div>

            <div className="footer__container--left-awards"></div>
          </div>

          <div className="footer__container--right">
            <div className="footer__container--right-contacts">
              <div className="contacts">
                <img className="contacts__icon" src={icon1} alt="icon" />
                <p className="contacts__text">+1 (647) 916-2432</p>
              </div>

              <div className="contacts">
                <img className="contacts__icon" src={icon1} alt="icon" />
                <p className="contacts__text">joabparedes.ec@gmail.com</p>
              </div>

              <div className="contacts">
                <img className="contacts__icon" src={icon1} alt="icon" />
                <p className="contacts__text">Direct Message</p>
              </div>

              <div className="contacts">
                <img className="contacts__icon" src={icon1} alt="icon" />
                <p className="contacts__text">Get in touch</p>
              </div>
            </div>

            <div className="footer__container--right-us">
              <h4 className="us__heading">About us:</h4>
              <p className="us__text">
                At Panorama Landscaping, we specialize in transforming outdoor
                spaces into lush and inviting environments. With a commitment to
                quality craftsmanship and sustainable practices, our expert team
                offers tailored landscaping designs, installations, and
                year-round maintenance. Let us bring beauty and vitality to your
                outdoor living experience.
              </p>
              <div className="us__socials"></div>
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          &copy; All rights reserved to Joab Paredes
        </div>
      </footer>
    </>
  );
}

export default Footer;
