import React, { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi";
import BarChart from "../components/BarChart";
import Card from "../components/Card";
import DoughnutChart from "../components/Doughnut";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { audioUploads, notifications, users } from "../data/cardsData";
import { db } from "../firebase";
import "./Dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        let snapShot = await db.collection("users").get();
        let users = snapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setAllUsers(users);
      } catch (errors) {
        alert(errors);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__sideNav">
        <SideNav />
      </div>
      <div className="dashboard__content">
        <Header />
        <h1 className="dashboard__header">Dashboard</h1>
        <div className="dashboard__cards">
          <Link to="/users/" exact>
            <Card
              headerText="Users"
              value={allUsers.length}
              icon={<HiUsers />}
              iconColor="#04040D"
            />
          </Link>
          <Link to="/uploads/" exact>
            <Card {...audioUploads} />
          </Link>
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
