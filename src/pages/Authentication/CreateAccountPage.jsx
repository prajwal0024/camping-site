import React, { useRef, useState } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as GoogleLogo } from "../../img/google-logo.svg";
import { useAuth } from "../../contexts/AuthContext";
import "./Authentication.scss";
import { Link, useHistory } from "react-router-dom";

export const CreateAccountPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value)
      return setError("Password do not match");

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="authentication">
      {error && alert(error)}
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
      <form className="authentication-form" onSubmit={handleSubmit}>
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
        <button disabled={loading} className="btn btn--primary" type={"submit"}>
          Create Account
        </button>
      </form>
      <p className="authentication__bottom-text">
        Already have an Account..?,{" "}
        <Link className="authentication__link" to="/login">
          click here
        </Link>{" "}
        to Login!
      </p>
    </div>
  );
};
