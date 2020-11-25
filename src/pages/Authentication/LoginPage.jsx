import React, { useRef, useState } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as GoogleLogo } from "../../img/google-logo.svg";
import { useAuth } from "../../contexts/AuthContext";
import "./Authentication.scss";
import { Link, useHistory } from "react-router-dom";

export const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signin } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);
  }

  return (
    <div className="authentication">
      {error && alert(error)}
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
      <form className="authentication-form" onSubmit={handleSubmit}>
        <FormInput type="text" placeholder="Enter Email" refrence={emailRef} />
        <FormInput
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          refrence={passwordRef}
        />
        <div className="authentication-form__password-control">
          <Link className="authentication__link" to="/forget">
            Forget Password
          </Link>
          <p
            className="authentication__link"
            onClick={() => setShowPassword(!showPassword)}
          >
            Show Password
          </p>
        </div>
        <button disabled={loading} className="btn btn--primary" type="submit">
          Login
        </button>
      </form>
      <p className="authentication__bottom-text">
        Don’t have an Account..?,{" "}
        <Link className="authentication__link" to="/createAccount">
          Click here
        </Link>{" "}
        to login one!
      </p>
    </div>
  );
};
