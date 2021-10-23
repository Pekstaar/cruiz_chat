import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BlogScreen, ChatScreen, HomeScreen, TermsScreen } from "./screens";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/terms" component={TermsScreen} />
        <Route path="/chat" component={ChatScreen} />
        <Route path="/blog" component={BlogScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
