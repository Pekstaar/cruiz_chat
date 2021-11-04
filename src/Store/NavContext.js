import { useEffect, useState } from "react";
import { Context } from "./MainContext";

export const NavContext = ({ children }) => {
  const [current, setCurrent] = useState("home");
  const path = window.location.pathname.split("/")[1];

  useEffect(() => {
    path === "" ? setCurrent("home") : setCurrent(path);
  }, [path]);

  return (
    <Context.Provider value={{ current, setCurrent }}>
      {children}
    </Context.Provider>
  );
};
