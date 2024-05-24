import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../public/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="TUPIKE LOGO" />
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
