import React, { useEffect, useState } from "react";
import { RiDiscFill } from "react-icons/ri";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { hideLoader, showLoader } from "../store/actions/loaderAction";
import "./Uploads.css";
import { LinearProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";

export default function Uploads() {
  const [allRecordings, setAllRecordings] = useState([]);
  let loader = useSelector((globalState) => globalState.loaderReducer);
  let dispatch = useDispatch();

  useEffect(() => {
    const getRecordings = async () => {
      try {
        dispatch(showLoader());
        let snapShot = await db.collection("audioRecordings").get();
        let recordings = snapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setAllRecordings(recordings);
        dispatch(hideLoader());
      } catch (error) {
        alert(error);
        dispatch(hideLoader());
      }
    };
    getRecordings();
  }, []);

  // Listens for real time updates
  useEffect(() => {
    db.collection("audioRecordings").onSnapshot((snapShot) =>
      setAllRecordings(
        snapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  });
  return (
    <div className="uploads">
      <div className="uploads__sideNav">
        <SideNav />
      </div>
      <div className="uploads__content">
        <Header />
        {loader ? <LinearProgress /> : <div></div>}
        <h1 className="uploads__header">Audio Uploads</h1>
        {loader ? (
          <div></div>
        ) : (
          <div className="uploads__details">
            {allRecordings.map((recording) => (
              <div key={recording.id} className="uploads__detail">
                <RiDiscFill className="uploads__icon" />
                <p>{recording.data.fileName}</p>
                <a
                  target="_blank"
                  href={recording.data.audioUrl}
                  className="uploads__btn"
                >
                  Play Audio
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
