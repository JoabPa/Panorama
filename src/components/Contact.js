import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-viewport">
      <div className="contact">
        <div className="contact__img"></div>
        <form className="contact__form form">
          <h3 className="form__title"> Get in touch</h3>
          <div className="form__name">
            <input className="input" type="text" placeholder="Name"></input>
          </div>
          <div className="form__contact">
            <input className="input" type="text" placeholder="Contact"></input>
          </div>
          <div className="form__message">
            <input className="input" type="text" placeholder="Message"></input>
          </div>
          <div className="form__btn">
            <span>Send</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
