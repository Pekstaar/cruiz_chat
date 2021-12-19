import React from "react";
import { Form } from "../components/login/Form";

export const LoginScreen = (props) => {
  // return signedInUser && signedInUser.uid ? (
  return (
    <div className="h-screen flex justify-center items-start">
      <Form />
    </div>
  );
  // ) : (
  //   <Redirect to="/chat" />
  // );
};
