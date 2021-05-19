import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";

export default function Header() {
  let userCredential = useSelector((globalState) =>
    JSON.parse(globalState.authReducer)
  );
  let username = userCredential.user.displayName;
  return (
    <div className="header">
      <p className="header__text">Hello {username}</p>
    </div>
  );
}
