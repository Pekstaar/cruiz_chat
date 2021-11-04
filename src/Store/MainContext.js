import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const auth = getAuth();

  // states
  // signedInUser{



  return (
    <Context.Provider
      value={{
        // signedInUser

      }}
    >
      {children}
    </Context.Provider>
  );
};

// MainContext;
