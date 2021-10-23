import React, { useEffect, useState } from "react";
import { conversations } from "../components/usersList/data";
import { Context } from "./context";

export const ChatContext = ({ children }) => {
  const [currentChat, setCurrentChat] = useState(conversations[0]);

  const setState = (state) => {
    setCurrentChat(state);
  };

  return (
    <Context.Provider
      value={{
        conversations,
        currentChat,
        updateCurrent: (current) => {
          setState(current);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
