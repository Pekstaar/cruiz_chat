import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Context } from "../Store";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(Context);

  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
