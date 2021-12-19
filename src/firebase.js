import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxuRGE2SE84icY2YvFYqfwsMIw2_8vHGk",
  authDomain: "clone-d223e.firebaseapp.com",
  databaseURL: "https://clone-d223e.firebaseio.com",
  projectId: "clone-d223e",
  storageBucket: "clone-d223e.appspot.com",
  messagingSenderId: "359370323816",
  appId: "1:359370323816:web:a6116ff95e4aa9a93348dd",
  measurementId: "G-TVR0R9MGRF",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };