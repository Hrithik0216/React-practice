/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Cloud = ({ className, unionClassName, union = "https://c.animaapp.com/y9AIuLJz/img/union.svg" }) => {
  return (
    <div className={`cloud ${className}`}>
      <img className={`union ${unionClassName}`} alt="Union" src={union} />
    </div>
  );
};

Cloud.propTypes = {
  union: PropTypes.string,
};
