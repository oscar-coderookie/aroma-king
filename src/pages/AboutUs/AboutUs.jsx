import React from "react";
import "./AboutUs.scss";
import aboutUs from "./../../assets/img/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-us__title">About us: ¿what is aroma-king?</h2>
      <div className="about-us__info">
        <img src={aboutUs} alt="" className="about-us__img" />
        <div className="about-us__textblock">
          <p className="about-us__text">
            Aroma King presents its range of devices manufactured in Poland. It
            is an extraordinary disposable Pod. Aroma king disposable Pods the
            size of just over a finger with a nicotine level of 20mg, giving an
            incredibly smooth hit and suitable for all types of users. No
            buttons and easy to use.
          </p>
          <p className="about-us__text">
            Get up to 700 puffs with this disposable pod. No need to refill
            liquid or change resistors.
          </p>
          <h3 className="about-us__subtitle">Description:</h3>
        <p className="about-us__text">
          Aroma King disposable pods is powered by a built-in 550 mAh battery,
          when the charge runs out, users can dispose the device responsibly.
        </p>
        <p className="about-us__text">
        The battery power matches perfectly with the resistance of the
        atomizer, which features a pre-loaded cartridge of 50PG/50VG liquid at
        20mg/ml nicotine and 2ml quantity.
      </p>
        </div>

        
      </div>
    </div>
  );
};

export default AboutUs;
