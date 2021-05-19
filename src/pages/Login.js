import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logout, loginSuccess } from "../store/actions/authAction";
import "./Login.css";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

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
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      dispatch(loginSuccess(userCredential));
      console.log(userCredential);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login">
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
        <button className="login__btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}