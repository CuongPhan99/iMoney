// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwQzvnwmB3ZMCrzrrnYQtMorEpwUI-RGg",
  authDomain: "imoney-e35fd.firebaseapp.com",
  projectId: "imoney-e35fd",
  storageBucket: "imoney-e35fd.appspot.com",
  messagingSenderId: "162678389045",
  appId: "1:162678389045:web:bc9d0c50f29d83b877f47c",
  measurementId: "G-XJ66LCHQQV",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
