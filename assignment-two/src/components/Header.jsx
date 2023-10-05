import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar">
        <Link to={"/"}>
          <span>HOME</span>
        </Link>
        <Link to={"/store"}>
          <span>STORE</span>
        </Link>
        <Link>
          <span>TOURNAMENTS</span>
        </Link>
        <Link>
          <span>BLOG</span>
        </Link>
        <Link>
          <span>CONTACT</span>
        </Link>
      </div>

      <div className="register">
        <Link to={"/signin"}>SIGN IN</Link>
      </div>
    </div>
  );
};

export default Header;
