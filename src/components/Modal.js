import React, { useRef } from "react";
import "./Modal.css";
import { useSpring, animated } from "react-spring";
import { GiCancel } from "react-icons/gi";

export default function Modal({ setModal, modalData }) {
  const modalRef = useRef();
  const audioRef = useRef();
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
      setModal(false);
    }
  };

  const analyzeAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };

  return (
    <div ref={modalRef} onClick={(e) => hideModal(e)} className="modal">
      <animated.div style={spring} className="modal__square">
        <div className="modal__left">
          <button
            onClick={() => {
              analyzeAudio();
            }}
            className="modal__btn"
          >
            Analyze
          </button>
          <button
            onClick={() => pauseAudio()}
            className="modal__btn modal__btn--pause"
          >
            Pause
          </button>
        </div>
        <div className="modal__right">
          <div className="modal__rightHeader">
            <GiCancel
              onClick={() => setModal(false)}
              className="modal__cancel"
            />
          </div>
          <div className="modal__rightContent">
            <h1 className="modal__rightFileName">{modalData.fileName}</h1>
            <audio loop ref={audioRef} src={modalData.fileUrl} />
          </div>
        </div>
      </animated.div>
    </div>
  );
}
