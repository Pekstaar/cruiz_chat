import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  BlogScreen,
  ChatScreen,
  HomeScreen,
  LoginScreen,
  SignupScreen,
  TermsScreen,
} from "./screens";
import { ChatContext } from "./Store";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ChatContext>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/terms" component={TermsScreen} />
          <Route path="/chat" component={ChatScreen} />
          <Route path="/blog" component={BlogScreen} />
          <Route path="/signin" component={LoginScreen} />
          <Route path="/signup" component={SignupScreen} />
        </ChatContext>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
//   const { signedInUser } = useContext(Context);

//   return (
//     <Route
//       {...rest}
//       render={(routeProps) =>
//         signedInUser && signedInUser.uid ? (
//           <Redirect to={"/signin"} />
//         ) : (
//           <Redirect to={"/chat"} />
//         )
//       }
//     />
//   );
// };
