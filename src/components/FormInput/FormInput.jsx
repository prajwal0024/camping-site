import React from "react";
import "./FormInput.scss";

export const FormInput = ({ type, placeholder }) => {
  return (
    <input type={type} className="sign-form__input" placeholder={placeholder} />
  );
};
