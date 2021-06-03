import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { CgProfile } from "react-icons/cg";
import "./Users.css";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function Users() {
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
      } catch (error) {
        alert(error);
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
        <h1 className="users__header">Users</h1>
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
      </div>
    </div>
  );
}
