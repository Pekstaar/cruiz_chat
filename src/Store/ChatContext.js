import React, { useState } from "react";
import { conversations } from "../components/usersList/data";
import { Context } from "./MainContext";
import {
  googleAuthProvider,
  signInWithPopup,
  getAuth,
} from "../FirebaseConfig";

// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "../FirebaseConfig";

export const ChatContext = ({ children }) => {
  const [currentChat, setCurrentChat] = useState(conversations[0]);
  const [userOnFocus, setUserOnFocus] = useState(conversations[0].id);
  const [users, setUsers] = useState([]);

  //

  const setState = (state) => {
    setCurrentChat(state);
  };

  const registerUser = (user) => {
    setUsers([...conversations, user]);
  };

  // sign in with google setup

  const signInWithGoogle = () =>
    signInWithPopup(getAuth(), googleAuthProvider).then((res) => {
      // const { displayName, email, localId, photoUrl } = res._tokenResponse;
      // setSignedInUser({ name: displayName, email, id: localId, photoUrl });
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
