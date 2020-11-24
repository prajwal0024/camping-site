import React from "react";
import "./FormInput.scss";

export const FormInput = ({ refrence, isLabel, ...rest }) => {
  return (
    <>
      <label>
        {isLabel && <p className="form-label">{isLabel}</p>}
        <input className="form-input" ref={refrence} {...rest} />
      </label>
    </>
  );
};
