import React from "react";

export const FormInput = ({ refrence, ...rest }) => {
  return <input className="form-input" ref={refrence} {...rest} />;
};
