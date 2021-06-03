import React from "react";
import "./Card.css";

export default function Card({ headerText, icon, value, iconColor }) {
  return (
    <div className="card">
      <div style={{ color: iconColor }} className="card__icon">
        {icon}
      </div>
      <h1 className="card__header">{headerText}</h1>
      <p className="card__value">{value}</p>
    </div>
  );
}
