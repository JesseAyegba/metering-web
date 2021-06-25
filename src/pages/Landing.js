import React from "react";
import "./Landing.css";
import logo from "../svgs/logoSelf.svg";
import phone from "../svgs/phone.svg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__header">
        <div className="landing__logo">
          <Link to="/" exact>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="landing__links">
          <Link to="/login/" exact>
            <button className="landing__link">Login</button>
          </Link>
        </div>
      </div>
      <div className="landing__hero">
        <div className="landing__heroText">
          <h1>An Audience Measurement</h1>
          <h1>Platform</h1>
          <Link to="/login/" exact>
            <button className="landing__btn">Admin Login</button>
          </Link>
        </div>
        <div className="landing__heroImage">
          <img src={phone} alt="" />
        </div>
      </div>
    </div>
  );
}
