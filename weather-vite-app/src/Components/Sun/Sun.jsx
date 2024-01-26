/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Sun = ({
  className,
  overlapGroupClassName,
  ellipseClassName,
  ellipse = "https://c.animaapp.com/y9AIuLJz/img/ellipse-4-2.svg",
  unionClassName,
  union = "https://c.animaapp.com/y9AIuLJz/img/union-21.svg",
}) => {
  return (
    <div className={`sun ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <img className={`ellipse ${ellipseClassName}`} alt="Ellipse" src={ellipse} />
        <img className={`img ${unionClassName}`} alt="Union" src={union} />
      </div>
    </div>
  );
};

Sun.propTypes = {
  ellipse: PropTypes.string,
  union: PropTypes.string,
};
