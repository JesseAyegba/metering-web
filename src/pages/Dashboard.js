import React from "react";
import BarChart from "../components/BarChart";
import Card from "../components/Card";
import DoughnutChart from "../components/Doughnut";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { audioUploads, notifications, users } from "../data/cardsData";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
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
