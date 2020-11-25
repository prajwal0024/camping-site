import React, { useRef } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./Authentication.scss";

export const ForgetPasswordPage = () => {
  const emailRef = useRef();
  return (
    <div className="authentication">
      <Logo className="authentication__logo" />
      <h1 className="authentication__heading">Forget Password</h1>
      <form className="authentication-form">
        <FormInput type="text" placeholder="Enter Email" refrence={emailRef} />
        <button className="btn btn--primary" type={"submit"}>
          Login
        </button>
      </form>
      <p className="authentication__bottom-text">
        <Link className="authentication__link" to="/login">
          Click here
        </Link>{" "}
        to Login
      </p>
    </div>
  );
};
