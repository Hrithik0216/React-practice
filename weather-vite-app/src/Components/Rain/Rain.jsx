/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Rain = ({
  className,
  groupClassName,
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
  divClassNameOverride,
  groupClassNameOverride,
  rectangleClassName1,
  rectangleClassName2,
  rectangleClassName3,
  rectangleClassName4,
}) => {
  return (
    <div className={`rain ${className}`}>
      <div className={`group ${groupClassName}`}>
        <div className={`rectangle ${rectangleClassName}`} />
        <div className={`div ${rectangleClassNameOverride}`} />
        <div className={`rectangle-2 ${divClassName}`} />
        <div className={`rectangle-3 ${divClassNameOverride}`} />
      </div>
      <div className={`group-2 ${groupClassNameOverride}`}>
        <div className={`rectangle ${rectangleClassName1}`} />
        <div className={`div ${rectangleClassName2}`} />
        <div className={`rectangle-2 ${rectangleClassName3}`} />
        <div className={`rectangle-3 ${rectangleClassName4}`} />
      </div>
    </div>
  );
};
