/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DarkCloud = ({
  className,
  unionClassName,
  union = "https://c.animaapp.com/y9AIuLJz/img/union-22.svg",
}) => {
  return (
    <div className={`dark-cloud ${className}`}>
      <img className={`union-2 ${unionClassName}`} alt="Union" src={union} />
    </div>
  );
};

DarkCloud.propTypes = {
  union: PropTypes.string,
};
