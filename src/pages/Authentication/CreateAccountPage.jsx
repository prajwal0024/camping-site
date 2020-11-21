import React, { useRef } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as GoogleLogo } from "../../img/google-logo.svg";
import "./Authentication.scss";

export const CreateAccountPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  return (
    <div className="authentication">
      <Logo className="authentication__logo" />
      <h1 className="authentication__heading">Create your Account</h1>
      <button className="btn btn--google-auth">
        <GoogleLogo className="btn--google-auth__logo" />
        Signup with Google
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
        <FormInput
          type="password"
          placeholder="Confirm Password"
          refrence={confirmPasswordRef}
        />
        <button className="btn btn--primary" type={"submit"}>
          Create Account
        </button>
      </form>
      <p className="authentication__bottom-text">
        Already have an Account..?,{" "}
        <span className="authentication__link">click here</span> to Login!
      </p>
    </div>
  );
};
