import { onAuthStateChanged } from "@firebase/auth";
import React from "react";
import { Form } from "../components/login/Form";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const LoginScreen = (props) => {
  let auth = getAuth();
  const history = useHistory();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push("/chat");

        updateDoc(doc(db, "users", user.uid), {
          status: "online",
        });
      } else {
        return;
      }
    });
  }, [auth, history]);

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
