import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import "./UserDetail.css";

export default function UserDetail() {
  const [userDetails, setUserDetails] = useState(null);
  const [allUserRecordings, setAllUserRecordings] = useState([]);
  let { userId } = useParams();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        let doc = await db.collection("users").doc(userId).get();

        let userProfile = {
          id: doc.id,
          data: doc.data(),
        };
        // // //////////////////////////////////////////
        console.log(userProfile);
        // ////////////////////////////////////////////
        // let snapShot = await db
        //   .collection("users")
        //   .doc(userId)
        //   .collection("audioRecordings")
        //   .get();
        // let userRecordings = snapShot.docs.map((doc) => ({
        //   id: doc.id,
        //   data: doc.data(),
        // }));
        setUserDetails(userProfile);
        // setAllUserRecordings(userRecordings);
      } catch (error) {
        alert(error);
      }
    };
    return getUserProfile();
  }, []);
  return (
    <div className="userDetail">
      <h1>I am the Detail Component</h1>
      <h1>{userId}</h1>
      {/* <div className="userDetail__profile">{userDetails.data.id}</div> */}
      {/* <div className="userDetail__recordings">
        {allUserRecordings.map((recording) => (
          <div key={recording.id}>
            <p>{recording.data.fileName}</p>
            <a href={recording.data.audioUrl} target="_blank">
              Play Audio
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
}
