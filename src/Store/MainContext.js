import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const auth = getAuth();

  // states
  // signedInUser
  const [signedInUser, setSignedInUser] = useState();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedInUser(user);
      } else {
        setSignedInUser(null);
      }
    });
  }, [auth]);

  return (
    <Context.Provider
      value={{
        // signedInUser
        signedInUser,
        setSignedInUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// MainContext;
