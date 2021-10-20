import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomeScreen } from "./screens";

const App = () => {
  return (
    <Router>
      <Route to="/" exact component={HomeScreen} />
      {/* <Route to="/chat/:id" component={} /> */}
    </Router>
  );
};

export default App;
