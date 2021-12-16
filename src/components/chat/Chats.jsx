import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../Store/MainContext";
import ReactScrollableFeed from "react-scrollable-feed";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { AiOutlinePaperClip } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import EmojiPicker from "../EmojiPicker";
import { MdOutlineKeyboardHide } from "react-icons/md";
import { doc, getDoc, updateDoc, Timestamp } from "@firebase/firestore";
import { db } from "../../FirebaseConfig";
import moment from "moment";

export const Chats = () => {
  const { currentChat, currentUser } = useContext(Context);

  const messageRef = useRef();
  const [messages, setMessages] = useState(currentChat.messages);
  const [showEmojis, setShowEmojis] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  // const [displayAttach, setDisplayAttach] = useState("");

  // function to handle emojis.
  const handleEmojis = () => {
    // messageRef.current.focus();
    setShowEmojis(!showEmojis);
  };

  const handleChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleEmojiChange = (item) => {
    setNewMessage(`${newMessage} ${item.native}`);
  };

  useEffect(() => {
    // messageRef.current.focus();

    setMessages(currentChat.messages);
  }, [currentChat, currentUser]);

  return (
    <>
      {currentChat === "empty" ? (
        <div className="flex h-full w-full justify-center items-center">
          <span>Chat Empty</span>
        </div>
      ) : (
        <div className="flex flex-col w-full relative">
          <ReactScrollableFeed
            onClick={() => setShowEmojis(false)}
            className="chats flex-grow bg-indigo-50 overflow-y-scroll mx-1 my-3 flex flex-col relative"
          >
            {/* Chat friends */}
            {messages && messages.length === 0 ? (
              <div className=" h-full w-full flex flex-col justify-center items-center">
                <MdOutlineKeyboardHide className="text-4xl text-gray-400" />
                <p className="font-bold text-center text-xl text-gray-400">
                  Type a message
                  <br /> to start chat
                </p>
              </div>
            ) : (
              messages &&
              messages.map((mes, id) =>
                currentUser && mes.sender && mes.sender === currentUser.id ? (
                  <MyMessage message={mes} key={id} />
                ) : (
                  <FriendMessage message={mes} key={id} />
                )
              )
            )}
          </ReactScrollableFeed>

          {/* display attachments */}
          {/* <div className="attachments flex flex-wrap bg-white absolute right-20 bottom-16 z-50">
        <IoDocumentsSharp />
      </div> */}

          {/* emojis div */}
          <div
            className={`${
              !showEmojis && "hidden"
            } z-40 absolute bottom-20 left-7`}
          >
            {/* <EmojiPicker onEmojiClick={""} /> */}
            <EmojiPicker onChange={handleEmojiChange} />

            <span
              className=" absolute z-50 text-red-600 cursor-pointer p-1 bg-white rounded-full"
              style={{ top: "-15px", left: "-10px" }}
              onClick={() => setShowEmojis(!showEmojis)}
            >
              <MdCancel className="text-2xl " />
            </span>
          </div>

          <div className="w-full p-1 absolute bottom-0">
            <form
              className=" flex p-2  mx-auto mb-1 bg-indigo-100 "
              onSubmit={(e) => {
                e.preventDefault();
                // const newMessage = messageRef.current.value;
                const mes = {
                  createdAt: Timestamp.fromDate(new Date()),
                  sender: currentUser.id,
                  messageText: newMessage,
                };

                newMessage !== "" && setMessages([...messages, mes]);

                // save chat to database
                const chatsRef = doc(db, "chats", currentChat.id);

                getDoc(chatsRef).then((r) => {
                  updateDoc(chatsRef, {
                    messages: [...r.data().messages, mes],
                  })
                    .then((r) => {
                      console.log("chat updated successfully!", r);
                    })
                    .catch((err) => console.log(err));
                });
                setNewMessage("");
                setShowEmojis(false);
                // Set the "capital" field of the city 'DC'
                //

                // fetchChats();
              }}
            >
              {/* send message */}
              <input
                type="text"
                className="flex-grow p-2 text text-gray-600 outline-none border-0 rounded-tl rounded-bl"
                placeholder="Write your message here. . ."
                value={newMessage}
                onChange={handleChange}
                ref={messageRef}
              />

              {/* icons */}
              <span
                className="h-12 bg-white flex items-center cursor-pointer "
                onClick={() => handleEmojis()}
              >
                <MdFaceRetouchingNatural className="text-2xl mx-1 text-gray-400 hover:text-gray-600" />
              </span>

              {/* attachfile */}
              <div className="h-12 bg-white flex items-center cursor-pointer">
                <AiOutlinePaperClip className="text-2xl mx-2 text-gray-400 " />
              </div>

              {/* send button */}
              <button
                type="submit"
                className="mx-2 p-2 bg-green-300 outline-none rounded cursor-pointer hover:bg-green-200"
              >
                <IoIosSend className="text-3xl text-green-900" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const FriendMessage = ({ message }) => {
  return (
    <div className="block m-1 p-3">
      <div
        className="bg-gray-50 inline-block p-2 rounded-t-2xl rounded-br-2xl text-sm"
        style={{ maxWidth: "70%" }}
      >
        {message.messageText}
      </div>
      <br />
      <span className="text-gray-500" style={{ fontSize: "13px" }}>
        {moment(message.createdAt.toDate(), "YYYYMMDD").fromNow()}
      </span>
    </div>
  );
};
const MyMessage = ({ message }) => {
  return (
    <div className=" m-1 px-3 flex flex-row-reverse">
      <div className="flex flex-col" style={{ maxWidth: "70%" }}>
        <div
          style={{ backgroundColor: "#08112Dc0" }}
          className="  p-2 rounded-t-2xl text-gray-100 px-4 rounded-bl-2xl flex"
        >
          {message.messageText}
        </div>
        <span className="text-sm text-gray-500 " style={{ fontSize: "13px" }}>
          {moment(message.createdAt.toDate(), "YYYYMMDD").fromNow()}
        </span>
      </div>
    </div>
  );
};
