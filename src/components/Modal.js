import React, { useRef, useEffect } from "react";
import "./Modal.css";
import { useSpring, animated } from "react-spring";
import { ImCross } from "react-icons/im";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import Learning from "./Learning";
import { useSelector, useDispatch } from "react-redux";
import { predictionNotDone } from "../store/actions/predictionAction";

export default function Modal({ setModal, modalData }) {
  let { userId } = useParams();
  const modalRef = useRef();
  const audioRef = useRef();
  let prediction = useSelector((globalState) => globalState.predictionReducer);
  let dispatch = useDispatch();
  const spring = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
  });

  const hideModal = (e) => {
    if (e.target === modalRef.current) {
      dispatch(predictionNotDone());
      setModal(false);
    }
  };

  const analyzeAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  const saveChannel = async (channel) => {
    try {
      if (channel === "wazobia") {
        await db
          .collection("Channels")
          .doc("Wazobia")
          .collection("AnalyzedRecordings")
          .doc(modalData.fileName)
          .set({
            fileName: modalData.fileName,
            dateAnalyzed: new Date(),
          });

        await db
          .collection("users")
          .doc(userId)
          .collection("audioRecordings")
          .doc(modalData.fileName)
          .update({
            isAnalyzed: true,
          });
        alert("Analysis Successful");
        setModal(false);
      } else if (channel === "city") {
        await db
          .collection("Channels")
          .doc("City")
          .collection("AnalyzedRecordings")
          .doc(modalData.fileName)
          .set({
            fileName: modalData.fileName,
            dateAnalyzed: new Date(),
          });

        await db
          .collection("users")
          .doc(userId)
          .collection("audioRecordings")
          .doc(modalData.fileName)
          .update({
            isAnalyzed: true,
          });
        alert("Analysis Successful");
        setModal(false);
      } else if (channel === "raypower") {
        await db
          .collection("Channels")
          .doc("Raypower")
          .collection("AnalyzedRecordings")
          .doc(modalData.fileName)
          .set({
            fileName: modalData.fileName,
            dateAnalyzed: new Date(),
          });

        await db
          .collection("users")
          .doc(userId)
          .collection("audioRecordings")
          .doc(modalData.fileName)
          .update({
            isAnalyzed: true,
          });
        alert("Analysis Successful");
        setModal(false);
      }
    } catch (errors) {
      alert(errors);
    }
  };

  return (
    <div ref={modalRef} onClick={(e) => hideModal(e)} className="modal">
      <animated.div style={spring} className="modal__square">
        <div className="modal__right">
          <div className="modal__rightHeader">
            <ImCross
              onClick={() => {
                dispatch(predictionNotDone());
                setModal(false);
              }}
              className="modal__cancel"
            />
          </div>
          <div className="modal__rightContent">
            <h1 className="modal__rightFileName">{modalData.fileName}</h1>
            <Learning modalData={modalData} />
            {prediction ? (
              <div className="modal__resultButtons">
                <button
                  onClick={() => saveChannel("wazobia")}
                  className="modal__resultButton modal__resultButton--wazobia"
                >
                  Wazobia FM
                </button>
                <button
                  onClick={() => saveChannel("city")}
                  className="modal__resultButton modal__resultButton--city"
                >
                  City FM
                </button>
                <button
                  onClick={() => saveChannel("raypower")}
                  className="modal__resultButton modal__resultButton--hebron"
                >
                  Raypower FM
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </animated.div>
    </div>
  );
}
