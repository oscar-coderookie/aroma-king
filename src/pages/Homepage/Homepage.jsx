import React from "react";
import "./Homepage.scss";
import { SlideShow } from "../../components";

const Homepage = () => {
  return (
    <div className="homepage">
      <SlideShow />
      <div className="homepage__section2">
        <h2>
          “The best Pods in the market MADE IN EUROPE. Refreshing puffs with the
          best flavors you can imagine. Smooth, fresh, aromatic and long
          lasting”
        </h2>
        <h3 className="homepage__subtitle">
          The largest variety of pods on the European market
        </h3>
      </div>
    </div>
  );
};

export default Homepage;
