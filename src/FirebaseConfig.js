import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCMOFDT-BSl-20Tenknb2iRKBGrY5I2Pjo",
  authDomain: "chatapp-project-web.firebaseapp.com",
  projectId: "chatapp-project-web",
  storageBucket: "chatapp-project-web.appspot.com",
  messagingSenderId: "431639200611",
  appId: "1:431639200611:web:5a26cba385757f0e5bc956",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

//initiating references to the databases
// const usersRef = db.collection("users");

//google provider sign-in
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, auth, googleProvider };
