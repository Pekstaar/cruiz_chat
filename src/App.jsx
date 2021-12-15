import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  BlogScreen,
  ChatScreen,
  HomeScreen,
  LoginScreen,
  SignupScreen,
  TermsScreen,
} from "./screens";
import { ChatContext } from "./Store";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "@firebase/auth";
import { getAuth } from "./FirebaseConfig";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ChatContext>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/terms" component={TermsScreen} />
          <PrivateRoute path="/chat" component={ChatScreen} />
          <Route path="/blog" component={BlogScreen} />
          <Route path="/signin" component={LoginScreen} />
          <Route path="/signup" component={SignupScreen} />
        </ChatContext>
      </Switch>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
};

export default App;

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const auth = getAuth();
  // const history = useHistory();

  // const [currentUser, setCurrentUser] = useState(auth)
  const [signedInUser, setSignedInUser] = useState({
    signedIn: false,
    user: null,
  });

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedInUser({ signedIn: true, user: user });
      } else {
        setSignedInUser({ signedIn: false, user: null });
      }
    });
  }, [auth]);

  return (
    <Route
      {...rest}
      render={
        (routeProps) =>
          signedInUser.signedIn ? (
            <RouteComponent />
          ) : (
            <Redirect to={"/signin"} />
          )

        // signedInUser && signedInUser.uid ? (
        //   <Redirect to={"/signin"} />
      }
    />
  );
};
