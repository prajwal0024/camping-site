import React from "react";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = ({ isLinkWhite }) => {
  return (
    <nav
      className={`nav container ${
        isLinkWhite ? "nav__link--white" : "nav__link--secondary"
      }`}
    >
      <Logo className="nav__logo" />
      <ul className={`nav__list `}>
        <li className="nav__list-item ">
          <Link className="nav__link nav__active " to="/">
            Home
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/Camping">
            Camping
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/About">
            About
          </Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
      <Link className="nav__link nav__active" to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Navigation;
