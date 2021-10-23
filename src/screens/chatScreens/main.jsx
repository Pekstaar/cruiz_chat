import React from "react";
import { Route, Switch } from "react-router";
import { Resources, SideNav } from "../../components/chat";
import { ChatContext } from "../../Store";
import { FriendsChat } from "./FriendsChat";
// import {Chat}

export const ChatScreen = () => {
  // const styling = {
  //   listContainer:
  //     "list_container bg-blue-dark w-full sm:w-4/6 md:w-2/4 lg:w-1/2 xl:w-4/12 h-5/6 px-0 rounded-lg overflow-y-scroll	relative",
  // };
  return (
    <ChatContext>
      <main
        className="bg-white container mx-auto my-4  flex "
        style={{ maxHeight: "96vh" }}
      >
        {/* side Icons Nav */}
        <SideNav />

        <Switch>
          <Route exact path="/chat">
            {/* chats */}
            <FriendsChat />
          </Route>
        </Switch>

        {/* Resource media with group or friend */}
        <Resources />
      </main>
    </ChatContext>
  );
};
