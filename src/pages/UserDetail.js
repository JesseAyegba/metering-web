import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase";
import "./UserDetail.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../store/actions/loaderAction";
import { LinearProgress } from "@material-ui/core";
import FlipMove from "react-flip-move";

export default function UserDetail() {
  const [userProfile, setUserProfile] = useState({
    id: "",
    data: {
      displayName: "",
      email: "",
    },
  });
  const [allUserRecordings, setAllUserRecordings] = useState([]);
  let { userId } = useParams();
  let dispatch = useDispatch();
  let loader = useSelector((globalState) => globalState.loaderReducer);

  // Gets User's Profile
  useEffect(() => {
    dispatch(showLoader());
    db.collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        setUserProfile({
          id: doc.id,
          data: doc.data(),
        });
        dispatch(hideLoader());
      })
      .catch((error) => {
        alert(error);
        dispatch(hideLoader());
      });
  }, []);

  // Gets User's Recordings
  useEffect(() => {
    db.collection("users")
      .doc(userId)
      .collection("audioRecordings")
      .onSnapshot((snapShot) =>
        setAllUserRecordings(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="userDetail">
      <div className="userDetail__header">
        <Link exact to="/users/">
          <BiArrowBack className="userDetail__arrow" />
        </Link>
        <Link exact to="/users/">
          <h1>Users</h1>
        </Link>
      </div>
      {loader ? <LinearProgress /> : <div></div>}
      {loader ? (
        <div></div>
      ) : (
        <div className="userDetail__hero">
          <div className="userDetail__profile">
            <div className="userDetail__name">
              {userProfile.data.displayName}
            </div>
            <div className="userDetail__email">{userProfile.data.email}</div>
          </div>
          <FlipMove className="userDetail__recordings">
            {allUserRecordings.map((recording) => (
              <div className="userDetail__recording" key={recording.id}>
                <p>{recording.data.fileName}</p>
                <a href={recording.data.audioUrl} target="_blank">
                  <AiFillPlayCircle className="userDetail__icon" />
                </a>
              </div>
            ))}
          </FlipMove>
        </div>
      )}
    </div>
  );
}
