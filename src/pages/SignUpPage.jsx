import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as GoogleLogo } from "../img/google-logo.svg";
import "./SignForm.scss";
import { FormInput } from "../components/FormInput/FormInput";

export const SignUpPage = () => {
  return (
    <div className="sign-form u-center-div">
      <Logo className="sign-form__logo" />
      <h1 className="sign-form__heading-primary">Create new Account</h1>
      <button className="btn btn--google">
        <GoogleLogo className="google-logo" />
        Signup with Google
      </button>
      <div className="sign-form__or-div">
        <hr />
        <p>or</p>
      </div>
      <FormInput type="text" placeholder="Enter Email" />
      <FormInput type="password" placeholder="Enter Password" />
      <FormInput type="password" placeholder="Confirm Password" />
      <button className="btn btn--primary">Next</button>
      <p className="sign-form__bottom-text">
        Already have an Account..?, <span>click here</span> to Login!
      </p>
    </div>
  );
};
