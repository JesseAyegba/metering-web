import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
