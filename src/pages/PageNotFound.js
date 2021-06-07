import React from "react";
import "./PageNotFound.css";
import image from "../svgs/404.svg";

export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <img src={image} alt="Page Not Found Image" />
      <h1>Page Not Found</h1>
    </div>
  );
}
