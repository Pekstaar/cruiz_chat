import React, { useState } from "react";
import { conversations } from "../components/usersList/data";
import { Context } from "./context";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const ChatContext = ({ children }) => {
  const [currentChat, setCurrentChat] = useState(conversations[0]);
  const [userOnFocus, setUserOnFocus] = useState(conversations[0].id);
  const [users, setUsers] = useState([]);

  const authProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const setState = (state) => {
    setCurrentChat(state);
  };

  const registerUser = (user) => {
    setUsers([...conversations, user]);
  };

  const signInWithGoogle = () => {
    try {
      signInWithPopup(auth, authProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log("signed in user: ", user);
        })
        .catch((error) => {
          console.log(error.message);
          // ...
        });
    } catch (error) {
      console.log(error);
    }
  };

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
      }}
    >
      {children}
    </Context.Provider>
  );
};
