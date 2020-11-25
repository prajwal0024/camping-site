import React from "react";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = ({ isLinkWhite, primaryLink, hideLinks }) => {
  return (
    <nav
      className={`nav container ${
        isLinkWhite ? "nav__link--white" : "nav__link--secondary"
      }`}
    >
      <Logo className="nav__logo" />
      <ul className={`nav__list ${hideLinks && "nav__hide"} `}>
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
      <Link className="nav__link nav__active" to={`/${primaryLink.link}`}>
        {primaryLink.title}
      </Link>
    </nav>
  );
};

export default Navigation;
