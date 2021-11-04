import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App.jsx";
import { MainContext } from "./Store/MainContext";

ReactDOM.render(
  <MainContext>
    <App />
  </MainContext>,
  document.getElementById("root")
);
