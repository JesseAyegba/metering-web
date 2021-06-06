import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { CgProfile } from "react-icons/cg";
import "./Users.css";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../store/actions/loaderAction";
import { LinearProgress } from "@material-ui/core";

export default function Users() {
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
      } catch (error) {
        alert(error);
        dispatch(hideLoader());
      }
    };
    getUsers();
  }, []);

  return (
    <div className="users">
      <div className="users__sideNav">
        <SideNav />
      </div>
      <div className="users__content">
        <Header />
        {loader ? <LinearProgress /> : <div></div>}
        <h1 className="users__header">Users</h1>
        {loader ? (
          <div></div>
        ) : (
          <div className="users__details">
            {allUsers.map((user) => (
              <div key={user.id} className="users__detail">
                <CgProfile className="users__icon" />
                <p>{user.data.email}</p>
                <Link exact to={`/users/${user.id}/`} className="users__btn">
                  View profile
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
