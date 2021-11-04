import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMOFDT-BSl-20Tenknb2iRKBGrY5I2Pjo",
  authDomain: "chatapp-project-web.firebaseapp.com",
  projectId: "chatapp-project-web",
  storageBucket: "chatapp-project-web.appspot.com",
  messagingSenderId: "431639200611",
  appId: "1:431639200611:web:5a26cba385757f0e5bc956",
};

export const firebase = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth;

const googleAuthProvider = new GoogleAuthProvider();
// // googleProvider.setCustomParameters({ prompt: "select_account" });
//   firebase.auth().signInWithPopup(googleProvider);
// // export { firebase, db, auth, functions, googleProvider }

// // export default app;
export { googleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut };
