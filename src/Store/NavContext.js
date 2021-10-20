import { createContext, useState } from "react";

export const Context = createContext();

export const NavContext = ({ children }) => {
  const [current, setCurrent] = useState("home");

  return (
    <Context.Provider value={{ current, setCurrent }}>
      {children}
    </Context.Provider>
  );
};
