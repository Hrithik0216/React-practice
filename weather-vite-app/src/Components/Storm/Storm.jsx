/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Lightning4 } from "../../icons/Lightning4";
import "./style.css";

export const Storm = ({
  className,
  overlapGroupClassName,
  icon = <Lightning4 className="lightning-4" />,
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
    <div className={`storm ${className}`}>
      <div className={`overlap-group-2 ${overlapGroupClassName}`}>
        {icon}
        <div className={`group-3 ${groupClassName}`}>
          <div className={`rectangle-4 ${rectangleClassName}`} />
          <div className={`rectangle-5 ${rectangleClassNameOverride}`} />
          <div className={`rectangle-6 ${divClassName}`} />
          <div className={`rectangle-7 ${divClassNameOverride}`} />
        </div>
        <div className={`group-4 ${groupClassNameOverride}`}>
          <div className={`rectangle-5 ${rectangleClassName1}`} />
          <div className={`rectangle-8 ${rectangleClassName2}`} />
          <div className={`rectangle-7 ${rectangleClassName3}`} />
          <div className={`rectangle-6 ${rectangleClassName4}`} />
        </div>
      </div>
    </div>
  );
};
