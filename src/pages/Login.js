import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { loginSuccess } from "../store/actions/authAction";
import "./Login.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { hideLoader, showLoader } from "../store/actions/loaderAction";
import { LinearProgress } from "@material-ui/core";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  let loader = useSelector((globalState) => globalState.loaderReducer);

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = userInput.email;
    let password = userInput.password;

    try {
      dispatch(showLoader());
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      dispatch(loginSuccess(userCredential));
      dispatch(hideLoader());
    } catch (error) {
      alert(error.message);
      dispatch(hideLoader());
    }
  };
  return (
    <div className="login">
      {loader ? <LinearProgress /> : <div></div>}
      <div className="login__logo"></div>
      <h1 className="login__header">Admin Login</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="login__form">
        <div className="login__formField">
          <input
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Email"
            type="email"
            className="login__input"
          />
        </div>
        <div className="login__formField">
          <input
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            type="password"
            className="login__input"
          />
        </div>
        <button className="login__btn" type={loader ? "button" : "submit"}>
          {loader ? <CircularProgress style={{ color: "white" }} /> : "Login"}
        </button>
      </form>
    </div>
  );
}
