// import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";
import Loading from "../components/Loading";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentNav, setCurrentNav] = useState("friendschat");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Context.Provider
      value={{
        currentUser: user,
        currentNav,
        setCurrentNav,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// MainContext;
