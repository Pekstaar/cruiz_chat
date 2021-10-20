import React from "react";
import { ChatHeader, Divider, Search, Friend, Footer } from "../components";
import { conversations } from "../components/usersList/data";

// import {Chat}

const ChatScreen = () => {
  const styling = {
    listContainer:
      "list_container bg-blue-dark w-full sm:w-4/6 md:w-2/4 lg:w-1/2 xl:w-4/12 h-5/6 px-0 rounded-lg overflow-y-scroll	relative",
  };
  return (
    <main className="h-screen bgc-blue-tale  flex items-center justify-center relative">
      <div className={styling.listContainer}>
        <div className="px-2">
          <ChatHeader />
        </div>
        <Divider />
        <Search />
        {conversations.map((conv) => (
          <Friend
            key={conv.id}
            imgUrl={conv.imageUrl}
            status={conv.status}
            name={conv.name}
          />
        ))}

        <Footer />
      </div>
    </main>
  );
};

export default ChatScreen;
