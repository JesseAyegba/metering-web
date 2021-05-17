import React from "react";
import "./SideNav.css";
import { FiPower } from "react-icons/fi";
import { MdDashboard, MdAudiotrack } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { NavLink as Link } from "react-router-dom";
import { GiSoundOn } from "react-icons/gi";

export default function SideNav() {
  return (
    <div className="sideNav">
      <div className="sideNav__links">
        <Link exact to="/dashboard/">
          <li className="sideNav__link">
            <MdDashboard className="sideNav__icon" />
            Dashboard
          </li>
        </Link>
        <Link exact to="/users/">
          <li className="sideNav__link">
            <HiUsers className="sideNav__icon" />
            Users
          </li>
        </Link>
        <Link exact to="/uploads/">
          <li className="sideNav__link">
            <GiSoundOn className="sideNav__icon" />
            Audio Uploads
          </li>
        </Link>
        <li className="sideNav__link sideNav__link--bottom">
          <FiPower className="sideNav__icon" />
          Logout
        </li>
      </div>
    </div>
  );
}
