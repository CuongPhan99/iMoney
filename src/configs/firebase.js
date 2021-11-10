import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8CCszNE6sTV0c1WIQpP9BO0tFZY17wP8",
  authDomain: "imoney-f8d02.firebaseapp.com",
  projectId: "imoney-f8d02",
  storageBucket: "imoney-f8d02.appspot.com",
  messagingSenderId: "25844797489",
  appId: "1: 25844797489: web: 9cb93d73d8f9291b3fc510",
  measurementId: "G-29RQ8G5ZBC",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
