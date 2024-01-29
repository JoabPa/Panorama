import React from "react";
import "./Procedure.scss";

function Procedure() {
  return (
    <section className="procedure">
      <div className="procedure__container">
        <h2 className="procedure__container--title">Simple As This</h2>

        <div className="procedure__container--steps">
          <div className="step step--1">
            <img alt="step 1" className="step__img"></img>
            <h3 className="step__heading">Fill the form</h3>
            <p className="step__text">
              Click on the button and tell us what service are you looking for!
            </p>
          </div>

          <figure className="arrow">
            <svg viewBox="0 0 24 24">
              <defs>
                <linearGradient id="left-to-right1">
                  <stop offset="0" stopColor="#f5edd1">
                    <animate
                      id="anim11"
                      attributeName="offset"
                      dur="3s"
                      from="0"
                      to="1"
                      begin="0s; anim21.end"
                    />
                  </stop>
                  <stop offset="0" stopColor="transparent">
                    <animate
                      id="anim12"
                      attributeName="offset"
                      dur="3s"
                      from="0"
                      to="1"
                      begin="0s; anim22.end"
                    />
                  </stop>
                </linearGradient>
              </defs>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                  fill="rgba(245,237,209, 0.15)"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                  //fill="rgba(245,237,209, 0.15)"
                  fill="url(#left-to-right1)"
                />
              </svg>
            </svg>
          </figure>

          <div className="step step--2">
            <img alt="step 2" className="step__img"></img>
            <h3 className="step__heading">Get a quote</h3>
            <p className="step__text">
              Schedule a day for us to asses your project and give you an
              affordable quote
            </p>
          </div>

          <figure className="arrow">
            <svg viewBox="0 0 24 24">
              <defs>
                <linearGradient id="left-to-right2">
                  <stop offset="0" stopColor="#f5edd1">
                    <animate
                      id="anim21"
                      dur="6s"
                      attributeName="offset"
                      from="0"
                      to="2"
                      begin="anim11.end"
                    />
                  </stop>
                  <stop offset="0" stopColor="transparent">
                    <animate
                      id="anim22"
                      dur="6s"
                      attributeName="offset"
                      from="0"
                      to="2"
                      begin="anim12.end"
                    />
                  </stop>
                </linearGradient>
              </defs>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                  fill="rgba(245,237,209, 0.15)"
                  data-name="Right"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                  //fill="url(#left-to-right)"
                  fill="url(#left-to-right2)"
                  data-name="Right"
                />
              </svg>
            </svg>
          </figure>

          <div className="step step--3">
            <img alt="step 3" className="step__img"></img>
            <h3 className="step__heading">Transform your Panorama</h3>
            <p className="step__text">
              Let our crew transfor your space within the scheduled time and
              budget!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Procedure;
