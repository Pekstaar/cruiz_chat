import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  BlogScreen,
  ChatScreen,
  HomeScreen,
  LoginScreen,
  SignupScreen,
  TermsScreen,
} from "./screens";
import { MainContext } from "./Store";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import { Settings } from "./screens/chatScreens/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <MainContext>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/terms" component={TermsScreen} />
          <PrivateRoute exact path="/chat" component={ChatScreen} />
          <PrivateRoute path="/chat/settings" component={Settings} />
          <Route path="/blog" component={BlogScreen} />
          <Route path="/signin" component={LoginScreen} />
          <Route path="/signup" component={SignupScreen} />
        </MainContext>
      </Switch>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
};

export default App;
