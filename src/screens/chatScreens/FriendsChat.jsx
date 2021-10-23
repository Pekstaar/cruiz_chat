import React from "react";
import { Chats, Users } from "../../components/chat";

export const FriendsChat = () => {
  return (
    <div className=" flex  flex-grow">
      {/* list of users */}
      <Users />
      {/* chat panel */}
      <Chats />
    </div>
  );
};
