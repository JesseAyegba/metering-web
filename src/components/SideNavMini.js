import React from "react";
import "./SideNavMini.css";
import { FiPower } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { NavLink as Link } from "react-router-dom";
import GraphicEqRoundedIcon from "@material-ui/icons/GraphicEqRounded";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/authAction";
import { hideLoader, showLoader } from "../store/actions/loaderAction";
import logo from "../svgs/logoSelf.svg";

export default function SideNavMini() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showLoader());
    auth.signOut();
    dispatch(hideLoader());
    dispatch(logout());
  };
  return (
    <div className="sideNavMini">
      <div className="sideNavMini__logo">
        <Link exact to="/dashboard/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="sideNavMini__links">
        <Link exact to="/dashboard/">
          <li className="sideNavMini__link">
            <MdDashboard className="sideNavMini__icon" />
            <div>Dashboard</div>
          </li>
        </Link>
        <Link exact to="/users/">
          <li className="sideNavMini__link">
            <HiUsers className="sideNavMini__icon" />
            <div>Users</div>
          </li>
        </Link>
        <Link exact to="/uploads/">
          <li className="sideNavMini__link">
            <GraphicEqRoundedIcon className="sideNavMini__icon" />
            <div>Audio Uploads</div>
          </li>
        </Link>
        <li
          onClick={() => handleClick()}
          className="sideNavMini__link sideNavMini__link--bottom"
        >
          <FiPower className="sideNavMini__icon" />
          <div>Logout</div>
        </li>
      </div>
    </div>
  );
}
