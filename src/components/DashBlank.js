import React from "react";
import BlankCard from "./BlankCard";
import "./DashBlank.css";

export default function DashBlank() {
  return (
    <div className="dashBlank">
      <div className="dashBlank__content">
        <div className="dashBlank__cards">
          <BlankCard />
          <BlankCard />
          <BlankCard />
        </div>
        <div className="dashBlank__graphs">
          <div className="dashBlank__bar">
            <div style={{ width: "90%" }} className="dashBlank__header"></div>
          </div>
          <div className="dashBlank__doughnut">
            <div style={{ width: "300px" }} className="dashBlank__header"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
