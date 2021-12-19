import React from "react";
import { SideNav } from "../../components/chat";
import { FriendsChat } from "./FriendsChat";
// import {Chat}

export const ChatScreen = () => {
  return (
    <main
      className="bg-white container mx-auto my-4 flex"
      style={{ height: "96vh", minHeight: "730px" }}
    >
      {/* side Icons Nav */}
      <SideNav />

      {/* chats */}
      <FriendsChat />
    </main>
  );
};
