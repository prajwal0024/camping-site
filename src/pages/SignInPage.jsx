import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as GoogleLogo } from "../img/google-logo.svg";
import "./SignForm.scss";
import { FormInput } from "../components/FormInput/FormInput";

export const SignInPage = () => {
  return (
    <div className="sign-form u-center-div">
      <Logo className="sign-form__logo" />
      <h1 className="sign-form__heading-primary">Login to your account</h1>
      <button className="btn btn--google">
        <GoogleLogo className="google-logo" />
        Login with Google
      </button>
      <div className="sign-form__or-div">
        <hr />
        <p>or</p>
      </div>
      <FormInput type="text" placeholder="Enter Email" />
      <FormInput type="password" placeholder="Enter Password" />
      <div className="sign-form__password-control">
        <p>Forget Password</p>
        <p>Show Password</p>
      </div>
      <button className="btn btn--primary">Login</button>
      <p className="sign-form__bottom-text">
        Don’t have an Account..?, <span>click here</span> to create one!
      </p>
    </div>
  );
};
