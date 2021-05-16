import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB27D8N8faDjCG3wp2MMkROOAG_xfmNfbo",
    authDomain: "metering-app.firebaseapp.com",
    projectId: "metering-app",
    storageBucket: "metering-app.appspot.com",
    messagingSenderId: "390734720929",
    appId: "1:390734720929:web:ab07173e61890620e1e5e0"
  };

let app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firestore.auth();

export { db, auth }