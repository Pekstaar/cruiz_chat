import React, { useContext } from "react";
import { Redirect } from "react-router";
import { Form } from "../components/login/Form";
import { Context } from "../Store/MainContext";

export const LoginScreen = (props) => {
  const { signedInUser } = useContext(Context);

  return signedInUser && signedInUser.uid ? (
    <div className="h-screen flex justify-center items-start">
      <Form />
    </div>
  ) : (
    <Redirect to="/chat" />
  );
};
