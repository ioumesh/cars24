import React from "react";
import { images } from "../../data/data";
import "./location.scss";
const Location = () => {
  return (
    <div className="locationWrapper">
      <img src={images.navbar.location} alt="location" />
      <span>New Delhi</span>
      <img src={images.navbar.arrow} alt="location" />
    </div>
  );
};

export default Location;
