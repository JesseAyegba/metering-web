import React from "react";
import "./Landing.css";
import logo from "../svgs/logoHorizontal.svg";
import phone from "../svgs/phone.svg";
import { Link } from "react-router-dom";
import { GiSoundWaves } from "react-icons/gi";
import { BiAnalyse } from "react-icons/bi";
import { FaMoneyBillWave } from "react-icons/fa";
import Footer from "../components/Footer";

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
          <h1>AN AUDIENCE MEASUREMENT PLATFORM</h1>
          <Link to="/login/" exact>
            <button className="landing__btn">Admin Login</button>
          </Link>
        </div>
        <div className="landing__heroImage">
          <img src={phone} alt="" />
        </div>
      </div>
      <div className="landing__info">
        <h1 className="landing__infoHeader">How we do it</h1>
        <div className="landing__cards">
          <div className="landing__card">
            <div className="landing__cardIcon">
              <GiSoundWaves
                style={{ fontSize: "100px", color: "var(--dark_purple)" }}
              />
            </div>
            <h1 className="landing__cardHeader">Send your Audio</h1>
            <p className="landing__cardBody">
              Use our mobile app to send your recordings to our secure cloud
              database
            </p>
          </div>
          <div className="landing__card landing__card--big">
            <div className="landing__cardIcon">
              <BiAnalyse
                style={{
                  fontSize: "100px",
                  color: "var(--energetic_light_blue)",
                }}
              />
            </div>
            <h1 className="landing__cardHeader">We analyze it</h1>
            <p className="landing__cardBody">
              With our machine learning enabled platform, we analyze your
              recordings
            </p>
          </div>
          <div className="landing__card">
            <div className="landing__cardIcon">
              <FaMoneyBillWave
                style={{ fontSize: "100px", color: "darkorange" }}
              />
            </div>
            <h1 className="landing__cardHeader">You get paid</h1>
            <p className="landing__cardBody">
              We pay you for sending recordings to us
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
