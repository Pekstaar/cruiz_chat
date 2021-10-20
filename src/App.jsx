import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer, Navigation } from "./components/home";
import { HomeScreen, TermsScreen } from "./screens";
import { NavContext } from "./Store";

const App = () => {
  return (
    <BrowserRouter>
      <NavContext>
        <Navigation />
      </NavContext>
      <Switch>
        <Route path="/terms" component={TermsScreen} />
        <Route path="/" exact component={HomeScreen} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
