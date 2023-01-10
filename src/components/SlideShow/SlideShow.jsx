import React from "react";
import './SlideShow.scss';

const img1 = "https://firebasestorage.googleapis.com/v0/b/aroma-king-web.appspot.com/o/home-images%2Fhome-1.png?alt=media&token=3813f1ce-4762-44da-9bf3-7198b4cf674a";

const img2 = "https://firebasestorage.googleapis.com/v0/b/aroma-king-web.appspot.com/o/home-images%2FSTANDARD%20EDITION.jpg?alt=media&token=34880435-f6e4-474a-baed-fe088f76e547"

const SlideShow = () => {
  return (
    <div className="slideshow">
      <img src={img1} alt="img1" />
    </div>
  );
};

export default SlideShow;
