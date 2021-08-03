import React, { useRef } from "react";
import { predictionReducer } from "../store/reducers/predictionReducer";
import { useDispatch } from "react-redux";
import "./Learning.css";
import { predictionDone } from "../store/actions/predictionAction";
const tf = require("@tensorflow/tfjs");
const speechCommands = require("@tensorflow-models/speech-commands");

export default function Learning({ modalData }) {
  const audioRef = useRef();
  const URL = "https://teachablemachine.withgoogle.com/models/N4QJg-7Us/";
  const dispatch = useDispatch();

  async function createModel() {
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL
    );

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
  }

  async function init() {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    const labelContainer = document.getElementById("learning__results");
    for (let i = 0; i < classLabels.length; i++) {
      labelContainer.appendChild(document.createElement("div"));
    }

    // listen() takes two arguments:
    // 1. A callback function that is invoked anytime a word is recognized.
    // 2. A configuration object with adjustable fields
    audioRef.current.play();
    recognizer.listen(
      (result) => {
        const scores = result.scores; // probability of prediction for each class
        // render the probability scores per class
        for (let i = 0; i < classLabels.length; i++) {
          const classPrediction =
            classLabels[i] + ": " + (result.scores[i] * 100).toFixed(0) + "%";
          labelContainer.childNodes[i].innerHTML = classPrediction;
        }
      },
      {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
      }
    );

    // Stop the recognition in 5 seconds.
    setTimeout(() => {
      recognizer.stopListening();
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      dispatch(predictionDone());
    }, 5000);
  }
  return (
    <div className="learning">
      <button className="learning__btn" onClick={() => init()}>
        Analyze
      </button>
      <div id="learning__results"></div>
      <audio ref={audioRef} src={modalData.fileUrl} />
    </div>
  );
}
