import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../public/tupike.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="TUPIKE LOGO" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
