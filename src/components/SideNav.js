import React from "react";
import "./SideNav.css";
import { FiPower } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { NavLink as Link } from "react-router-dom";
import GraphicEqRoundedIcon from "@material-ui/icons/GraphicEqRounded";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/authAction";
import { hideLoader, showLoader } from "../store/actions/loaderAction";
import logo from "../svgs/logo.svg";

export default function SideNav() {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      dispatch(showLoader());
      await auth.signOut();
      dispatch(hideLoader());
      dispatch(logout());
    } catch (error) {
      dispatch(hideLoader());
      alert(error.message);
    }
  };
  return (
    <div className="sideNav">
      <div className="sideNav__logo">
        <Link exact to="/dashboard/">
          <img src={logo} alt="" />
        </Link>
      </div>
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
            {/* <GiSoundOn className="sideNav__icon" /> */}
            <GraphicEqRoundedIcon className="sideNav__icon" />
            Audio Uploads
          </li>
        </Link>
        <li
          onClick={() => handleClick()}
          className="sideNav__link sideNav__link--bottom"
        >
          <FiPower className="sideNav__icon" />
          Logout
        </li>
      </div>
    </div>
  );
}
