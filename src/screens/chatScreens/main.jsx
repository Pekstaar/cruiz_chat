import React from "react";
import { Route, Switch } from "react-router";
import { SideNav } from "../../components/chat";
import { FriendsChat } from "./FriendsChat";
import { Settings } from "./Settings";
// import {Chat}

export const ChatScreen = () => {
  return (
    <main
      className="bg-white container mx-auto my-4 flex"
      style={{ height: "96vh", minHeight: "730px" }}
    >
      {/* side Icons Nav */}
      <SideNav />

      <Switch>
        <Route exact path="/chat/">
          {/* chats */}
          <FriendsChat />
        </Route>
        <Route exact path="/chat/settings">
          <Settings />
        </Route>
      </Switch>
    </main>
  );
};
