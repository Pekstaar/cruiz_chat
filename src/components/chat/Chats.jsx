import React, { useContext } from "react";
import { Context } from "../../Store/context";
import ReactScrollableFeed from "react-scrollable-feed";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

export const Chats = () => {
  const { currentChat } = useContext(Context);
  return (
    <div className="flex flex-col w-full">
      <ReactScrollableFeed className="chats flex-grow bg-indigo-50 rounded overflow-y-scroll mx-6 my-3 flex flex-col relative">
        {/* Chat friends */}
        {currentChat.messages.map((mes, id) =>
          mes.isMyMessage === true ? (
            <FriendMessage message={mes} key={id} />
          ) : (
            <MyMessage message={mes} key={id} />
          )
        )}
      </ReactScrollableFeed>
      <div className=" flex p-2 absolute sticky bottom-0 bg-indigo-100 w-full">
        <input
          type="text"
          className="flex-grow p-3 outline-none border-0 rounded-tl rounded-bl"
          placeholder="Write your message here. . ."
        />

        {/* icons */}
        <span className="h-full bg-white flex items-center cursor-pointer">
          <MdFaceRetouchingNatural className="text-3xl mx-1 text-gray-400 " />
        </span>

        {/* attachfile */}
        <span className="h-full bg-white flex items-center cursor-pointer">
          <AiOutlinePaperClip className="text-3xl mx-2 text-gray-400 " />
        </span>

        {/* send button */}
        <button className="mx-2 p-2 bg-green-300 rounded cursor-pointer hover:bg-green-200">
          <IoIosSend className="text-3xl text-green-900" />
        </button>
      </div>
    </div>
  );
};

const FriendMessage = ({ message }) => (
  <div className="block m-1 p-3">
    <div
      className="bg-gray-50 inline-block p-2 rounded-t-2xl rounded-br-2xl text-sm"
      style={{ maxWidth: "70%" }}
    >
      {message.messageText}
    </div>
    <br />
    <span className="text-sm text-gray-500" style={{ fontSize: "13px" }}>
      {message.createdAt}
    </span>
  </div>
);
const MyMessage = ({ message }) => (
  <div className="block m-1 px-3 flex flex-row-reverse">
    <div className="flex flex-col" style={{ maxWidth: "70%" }}>
      <div
        style={{ backgroundColor: "#08112Dc0" }}
        className=" inline-block p-2 rounded-t-2xl text-gray-100 px-4 rounded-bl-2xl text-sm flex"
      >
        {message.messageText}
      </div>
      <span className="text-sm text-gray-500 " style={{ fontSize: "13px" }}>
        {message.createdAt}
      </span>
    </div>
  </div>
);
