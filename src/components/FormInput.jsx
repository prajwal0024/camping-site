import React from "react";
import "./FormInput.scss";

export const FormInput = ({ refrence, ...rest }) => {
  return <input className="form-input" ref={refrence} {...rest} />;
};
