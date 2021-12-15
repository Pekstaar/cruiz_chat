import React from "react";
import { Chats, Media, Users } from "../../components/chat";

export const FriendsChat = () => {
  return (
    <div className=" flex  flex-grow">
      {/* list of users */}
      <Users />
      {/* chat panel */}
      <Chats />
      {/* Resource media with group or friend */}
      <Media />
    </div>
  );
};
