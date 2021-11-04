import React, { useState } from "react";
import { conversations } from "../components/usersList/data";
import { Context } from "./MainContext";
import {
  googleAuthProvider,
  signInWithPopup,
  signOut
} from "../FirebaseConfig";
import { getAuth } from "@firebase/auth";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { onAuthStateChanged } from "@firebase/auth";


// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "../FirebaseConfig";

export const ChatContext = (props) => {
  const { children } = props
  const history = useHistory();


  const [currentChat, setCurrentChat] = useState(conversations[0]);
  const [userOnFocus, setUserOnFocus] = useState(conversations[0].id);

  const [users, setUsers] = useState([]);

  const auth = getAuth();

  //toast function
  const showToast = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const setState = (state) => {
    setCurrentChat(state);
  };

  const registerUser = (user) => {
    setUsers([...conversations, user]);
  };

  // sign in with google setup

  const signInWithGoogle = () =>
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        showToast("Login Success!");
        history.push("/chat");
      });



  const logOut = () =>
    signOut(auth).then(() => {
      showToast("Logout Success!");
      history.push("/")
    });


  // const signInWithGoogle = () => {

  // };
  // end of signwith google setup



  return (
    <Context.Provider
      value={{
        conversations: users,
        currentChat,
        userOnFocus,
        setUserOnFocus,
        updateCurrent: (current) => {
          setState(current);
        },
        handleSignUp: registerUser,
        // sign with google variables
        signInWithGoogle,
        logOut,

      }}
    >
      {children}
    </Context.Provider>
  );
};
