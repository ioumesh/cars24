import React from "react";
import "./navbar.scss";
import { images } from "../../data/data";
import Location from "../Location/Location";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <img className="logo" src={images.navbar.logo} alt="logo" />
        <Location />
        <ul className="list">
          <li className="listItem">
            BUY A CAR <img src={images.navbar.arrow} alt="downarrow" />
          </li>
          <li className="listItem">SELL A CAR</li>
          <li className="listItem">CAR FINANCE</li>
        </ul>
      </div>
      <div className="right">
        <img className="heart" src={images.navbar.heart} alt="heart" />
        <img src={images.navbar.login} alt="login" />
        <div className="login">
          <span className="loginUser">Hello, Sign in</span>
          <span className="loginAccount">Account </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
