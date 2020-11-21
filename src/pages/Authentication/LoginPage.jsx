import React, { useRef } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as GoogleLogo } from "../../img/google-logo.svg";
import "./Authentication.scss";

export const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  return (
    <div className="authentication">
      <Logo className="authentication__logo" />
      <h1 className="authentication__heading">Login to your Account</h1>
      <button className="btn btn--google-auth">
        <GoogleLogo className="btn--google-auth__logo" />
        Login with Google
      </button>
      <div className="authentication__or">
        <hr />
        <p>or</p>
      </div>
      <form className="authentication-form">
        <FormInput type="text" placeholder="Enter Email" refrence={emailRef} />
        <FormInput
          type="password"
          placeholder="Enter Password"
          refrence={passwordRef}
        />
        <div className="authentication-form__password-control">
          <p className="authentication__link">Forget Password</p>
          <p className="authentication__link">Show Password</p>
        </div>
        <button className="btn btn--primary" type={"submit"}>
          Login
        </button>
      </form>
      <p className="authentication__bottom-text">
        Don’t have an Account..?,{" "}
        <span className="authentication__link">click here</span> to create one!
      </p>
    </div>
  );
};
