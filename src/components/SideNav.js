import React from "react";
import "./SideNav.css";
import { FiPower } from "react-icons/fi";
import { MdDashboard, MdAudiotrack } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { NavLink as Link } from "react-router-dom";
import { GiSoundOn } from "react-icons/gi";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/authAction";

export default function SideNav() {
  const dispatch = useDispatch();
  const handleClick = async () => {
    try {
      await auth.signOut();
      dispatch(logout())
    } catch (error) {
      alert(error.message);
    }
  }
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
        <li onClick={() => handleClick()} className="sideNav__link sideNav__link--bottom">
          <FiPower className="sideNav__icon" />
          Logout
        </li>
      </div>
    </div>
  );
}
