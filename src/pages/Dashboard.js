import React from "react";
import BarChart from "../components/BarChart";
import Card from "../components/Card";
import DoughnutChart from "../components/Doughnut";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { audioUploads, notifications, users } from "../data/cardsData";
import { db } from "../firebase";
import "./Dashboard.css";

export default function Dashboard() {
  const handleClick = async () => {
  db.collection("users").doc("mosh@gmail.com")
      .get()
      .then((user) => {
        if (user.exists) {
          console.log(user);
        } else {
          console.log("User does not exist");
        }
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  return (
    <div className="dashboard">
      <button
        onClick={() => handleClick()}
        style={{
          padding: 40,
          margin: 10,
          backgroundColor: "blue",
          color: "white",
        }}
        className="login__btnTester"
      >
        Click me
      </button>
      <div className="dashboard__sideNav">
        <SideNav />
      </div>
      <div className="dashboard__content">
        <Header />
        <h1 className="dashboard__header">Dashboard</h1>
        <div className="dashboard__cards">
          <Card {...users} />
          <Card {...audioUploads} />
          <Card {...notifications} />
        </div>
        <div className="dashboard__graphs">
          <BarChart />
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}
