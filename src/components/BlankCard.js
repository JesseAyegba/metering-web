import React from "react";
import "./BlankCard.css";

export default function BlankCard() {
  return (
    <div className="blankCard">
      <div className="blankCard__icon"></div>
      <div className="blankCard__header"></div>
      <div className="blankCard__value"></div>
    </div>
  );
}
