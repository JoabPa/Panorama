import React from "react";
import "./Procedure.scss";

function Procedure() {
  return (
    <section className="procedure">
      <div className="procedure__container">
        <h2 className="procedure__container--title">Simple As This</h2>

        <div className="procedure__container--steps">
          <div className="step">
            <figure className="step__figure">
              <img alt="step 1" className="step__figure--img"></img>
            </figure>
            <h3 className="step__heading">Fill the form</h3>
            <p className="step__text"></p>
          </div>

          <div className="step">
            <figure className="step__figure">
              <img alt="step 2" className="step__figure--img"></img>
            </figure>
            <h3 className="step__heading">Fill the form</h3>
            <p className="step__text"></p>
          </div>

          <div className="step">
            <figure className="step__figure">
              <img alt="step 3" className="step__figure--img"></img>
            </figure>
            <h3 className="step__heading">Fill the form</h3>
            <p className="step__text"></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Procedure;
