import React from "react";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>CONTACT:</h1>
      <div className="contact-page__block">
        <div className="contact-page__info">
          <h2> Contact information</h2>
          <p><b> Address:</b> Marbella (Spain)</p>
          <p><b>Whatsapp Number: </b>+34 644 75 86 79 </p>
          <p><b>Email: </b>info@aromaking.com </p>
        </div>
        <span className="contact-page__separator"></span>
        <form className="contact-page__form">
        <h2>contact form:</h2>
          <fieldset className="contact-page__fieldset">
            <label htmlFor="" className="contact-page__label">
              Name:
            </label>
            <input type="text" className="contact-page__input" />
          </fieldset>
          <fieldset className="contact-page__fieldset">
            <label htmlFor="" className="contact-page__label">
              Email:
            </label>
            <input type="email" className="contact-page__input" />
          </fieldset>
          <fieldset className="contact-page__fieldset">
            <label htmlFor="" className="contact-page__label">
              Phone:
            </label>
            <input type="number" className="contact-page__input" />
          </fieldset>
          <fieldset className="contact-page__fieldset">
            <label htmlFor="" className="contact-page__label">
              Message:
            </label>
            <textarea type="number" className="contact-page__input" maxLength="200" />
          </fieldset>
          <button className="contact-page__submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
