import React, { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi";
import BarChart from "../components/BarChart";
import Card from "../components/Card";
import DoughnutChart from "../components/Doughnut";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { audioUploads, notifications } from "../data/cardsData";
import { db } from "../firebase";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../store/actions/loaderAction";
import DashBlank from "../components/DashBlank";
import { LinearProgress } from "@material-ui/core";

export default function Dashboard() {
  const [allUsers, setAllUsers] = useState([]);
  let loader = useSelector((globalState) => globalState.loaderReducer);
  let dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      try {
        dispatch(showLoader());
        let snapShot = await db.collection("users").get();
        let users = snapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setAllUsers(users);
        dispatch(hideLoader());
      } catch (errors) {
        alert(errors);
        dispatch(hideLoader());
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
        {loader ? <LinearProgress /> : <div></div>}
        <h1 className="dashboard__header">Dashboard</h1>
        {loader ? (
          <DashBlank />
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
}
