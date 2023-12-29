import React from "react";
import "./Services.scss";
import icon1 from "../images/PNG/number.png";
import icon2 from "../images/PNG/number1.png";
import icon3 from "../images/PNG/number2.png";
import icon4 from "../images/PNG/number3.png";
import icon5 from "../images/PNG/number4.png";
import icon6 from "../images/PNG/number5.png";

function Services() {
  return (
    <section className="services">
      <h2 className="services__title">Our Services</h2>

      <div className="services__container">
        <div className="service">
          {/*<svg className="service__icon"></svg>*/}
          <img className="service__icon" src={icon1} alt="icon" />

          <h3 className="service__heading">Interlocking</h3>
          <p className="service__text">
            Elevate your outdoors with our interlock installation expertise. Our
            skilled team artfully lays durable materials to create stunning
            patios, walkways, and driveways.
          </p>
        </div>

        <div className="service">
          <img className="service__icon" src={icon2} alt="icon" />
          <h3 className="service__heading">Retaining wall</h3>
          <p className="service__text">
            Whether for terracing, erosion control, or defining garden areas,
            our retaining walls blend seamlessly with your landscape, adding
            structural integrity and visual appeal.
          </p>
        </div>

        <div className="service">
          <img className="service__icon" src={icon3} alt="icon" />
          <h3 className="service__heading">Fencing</h3>
          <p className="service__text">
            Define your space with our expertly designed and installed fencing
            solutions. We prioritize durability and style, creating a secure and
            visually appealing boundary for your property.
          </p>
        </div>

        <div className="service">
          <img className="service__icon" src={icon4} alt="icon" />
          <h3 className="service__heading">Landscape maintenance</h3>
          <p className="service__text">
            Maintain the beauty of your interlonking surfaces with our expert
            care—cleaning, relevel, and sealant application to enhance the
            overall appeal of your outdoor spaces.
          </p>
        </div>

        <div className="service">
          <img className="service__icon" src={icon5} alt="icon" />
          <h3 className="service__heading">Garden care</h3>
          <p className="service__text">
            Elevate your garden with our expert care services, including
            planting, pruning, weeding, and fertilization. Our skilled team
            ensures a vibrant and sustainable outdoor oasis.
          </p>
        </div>

        <div className="service">
          <img className="service__icon" src={icon6} alt="icon" />
          <h3 className="service__heading">Power washing & Sealing</h3>
          <p className="service__text">
            Revitalize your outdoor spaces with our power washing and sealing
            service, efficiently removing dirt and grime to enhance aesthetics
            and promote longevity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
