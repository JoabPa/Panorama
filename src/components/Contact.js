import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import "./Contact.scss";

function Contact() {
  const [hideModal, setHideModal] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ts709ly", "template_100hr69", form.current, {
        publicKey: "9dKFxDkqkWwRH1rMg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <btn
        className="btn"
        onClick={() => setHideModal((prevState) => !prevState)}
      >
        <span className="btn-text">{hideModal ? "FREE ESTIMATE" : "X"}</span>
      </btn>

      <div
        className={hideModal ? "contact-viewport hidden" : "contact-viewport"}
        onClick={() => setHideModal((prevState) => !prevState)}
      ></div>

      <div className={hideModal ? "contact hidden" : "contact"}>
        <div className="contact__img"></div>

        <form ref={form} className="contact__form form" onSubmit={sendEmail}>
          <h3 className="form__title"> Get in touch</h3>

          <div className="form__name">
            <input
              className="input"
              type="text"
              name="user_name"
              placeholder="Name"
            />
          </div>

          <div className="form__contact">
            <input
              className="input"
              type="text"
              name="user_contact"
              placeholder="Email or Phone Number"
            />
          </div>

          <div className="form__message">
            <textarea
              className="input input__message"
              name="user_message"
              placeholder="Message"
            />
          </div>

          <input type="submit" value="Send" className="form__btn" />

          {/*<div className="form__btn">
            <span>Send</span>
          </div>*/}
        </form>
      </div>
    </>
  );
}

export default Contact;
