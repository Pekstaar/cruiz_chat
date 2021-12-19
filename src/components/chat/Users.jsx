import React, { useState } from "react";
import { MdOutlineSearch, MdOutlineAdd } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import DialogModal from "../DialogModal";
import { ImBin } from "react-icons/im";
import {
  doc,
  updateDoc,
  onSnapshot,
  where,
  query,
  collection,
  arrayRemove,
} from "@firebase/firestore";
import { db } from "../../FirebaseConfig";
import { toastWarning } from "../toaster";

export const Users = ({
  friends: f,
  currentUser,
  setFriends: setF,
  userOnFocus,
  setUserOnFocus,
}) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [users, setUsers] = useState([]);

  const [friends, setFriends] = useState();

  const names =
    currentUser && currentUser.fullName && currentUser.fullName.split(" ");

  React.useEffect(() => setFriends(f), [f]);

  React.useEffect(() => {
    if (currentUser && currentUser.email) {
      const getUsers = async () => {
        const q = query(
          collection(db, "users"),
          where("email", "!=", currentUser.email)
        );

        onSnapshot(q, (snapshot) => {
          let users = [];
          snapshot.forEach((doc) => {
            if (doc.data()) {
              users.push(doc.data());
            }
          });
          setUsers([...users]);
        });
      };

      getUsers();
    }

    // Create a query against the collection.
  }, [currentUser, friends]);

  React.useEffect(() => console.log("friends", friends), [friends]);

  const deleteFriend = async (u) => {
    if (!u) {
      return;
    }

    const friendToDelete = friends.filter((user) => user.id === u.id)[0];
    const newList = friends.filter((user) => user.id !== u.id);

    // update firebase on new list\
    if (
      friendToDelete &&
      window.confirm(
        "Are you sure you want do delete " + friendToDelete.fullName + "?"
      )
    ) {
      setF(newList);
      try {
        // setFriends(newList);

        const thisUserRef = doc(db, "users", currentUser.uid);
        const friendRef = doc(db, "users", u.uid);

        await updateDoc(thisUserRef, {
          friends: arrayRemove(u.uid),
        });

        await updateDoc(friendRef, {
          friends: arrayRemove(currentUser.uid),
        });

        toastWarning(`${friendToDelete.fullName} Deleted Successfully!`);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const filterUsers = (searchValue, userArray) => {
    let filteredData = [];
    if (searchValue === "") {
      setFriends(f);
      return;
    }

    userArray.forEach((user) => {
      const value = searchValue.toLowerCase();
      const name = user.fullName.toLowerCase();

      if (name.includes(value)) {
        filteredData.push(user);
        return;
      }
    });

    setFriends(filteredData);
  };

  return (
    <div className="users w-80 h-full p-1 pb-1 flex-shrink-0 flex flex-col">
      {/* Navigation */}
      <div className="nav w-full text-gray-600 h-14 border-gray-200 flex items-center justify-center border-b-2 ">
        <span className="slab text-xl uppercase font-medium">Chats</span>
      </div>

      {/* friends profile */}
      <div className="h-44 bg-indigo-50 m-2 flex items-center justify-center flex-col gap-1">
        {/* image div */}
        <div className="img w-20 h-20 flex items-center justify-center bg-green-200 rounded-full border-2 border-white relative">
          {/* image/ */}
          {currentUser &&
          currentUser.imageUrl &&
          currentUser.imageUrl !== "" &&
          currentUser.imageUrl !== null ? (
            <img
              src={currentUser && currentUser.imageUrl}
              alt=""
              className="h-full rounded-full w-full object-cover"
            />
          ) : (
            <span className="font-medium slab text-3xl text-green-800">
              {names && names[0].substring(0, 1)}
              {names && names[1].substring(0, 1)}
            </span>
          )}

          {/* status dot */}
          <div
            className={
              currentUser &&
              currentUser.status &&
              currentUser.status === "online"
                ? "dot rounded-full bg-green-500 w-4 h-4 border-gray-100 border-4 p-1.5 absolute bottom-0 right-0"
                : `dot rounded-full bg-gray-400 w-4 h-4 border-gray-100 border-4 p-1.5 absolute bottom-0 right-0`
            }
          ></div>
        </div>
        {/* user name */}
        <span className="font-medium text-base slab  text-gray-500 ">
          {currentUser && currentUser.fullName}
        </span>

        {/* status */}
        {currentUser && currentUser.status === "online" ? (
          <div className="status bg-green-300 rounded text-sm text-green-800 p-1">
            online
          </div>
        ) : (
          <div className="status bg-gray-300 rounded text-sm text-gray-500 p-1">
            offline
          </div>
        )}
      </div>

      {/* search */}
      <div className="search p-1 relative">
        {/* input */}
        <input
          type="text"
          placeholder="search"
          className="w-full bg-indigo-50 text-sm p-2 px-2.5 outline-none text-gray-500 rounded-3xl"
          // value={toSearch}
          onChange={(e) => filterUsers(e.target.value, f)}
        />

        {/* absolute search icon */}
        <MdOutlineSearch className="text-2xl absolute right-3 top-3 text-gray-500" />
      </div>

      {/* body */}
      {/* body header */}
      <div className="b_header w-full flex items-center mt-2 px-1 gap-2">
        {/* latest chats title */}
        <span className="flex-grow text-gray-500 text-sm underline">
          latest chats
        </span>

        <div className={`${!displayModal && "hidden"}`}>
          <DialogModal setDisplay={setDisplayModal} users={users} />
        </div>
        {/* add new button */}
        <button
          onClick={() => setDisplayModal(true)}
          className="add_btn p-1.5 bg-green-200 hover:bg-green-100 rounded-full text-green-800 cursor-pointer"
        >
          <MdOutlineAdd className="text-2xl " />
        </button>

        {/* vertical dots */}
        <HiDotsVertical className="text-xl text-gray-400 cursor-pointer" />
      </div>

      {/* body user list */}
      <div
        className="userlist py-3 overflow-y-scroll flex-grow"
        // style={{ height: "390px" }}
      >
        {friends &&
          friends.map((user) => (
            <div
              className={`user m-1 p-2 hover:bg-gray-200 flex gap-2 cursor-pointer ${
                userOnFocus && userOnFocus.uid === user.uid ? "bg-gray-200" : ""
              }`}
              key={user.uid}
              onClick={() => {
                setUserOnFocus(user);
              }}
            >
              {/* image */}
              <div className="img w-14 h-14 rounded-full border-2 flex-shrink-0 border-gray-300 relative flex items-center justify-center bg-green-200 ">
                {/* image/ */}

                {user && user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <span className="font-medium slab text-3xl text-green-800">
                    {user && user.fullName.substring(0, 1)}
                  </span>
                )}
                {user.status === "online" ? (
                  <div className="absolute bottom-0 right-0 h-2 w-2 p-1.5  bg-green-500 border-white border-2 rounded-full" />
                ) : (
                  <div className="absolute bottom-0 right-0 h-2 w-2 p-1.5  bg-gray-400 border-white border-2 rounded-full" />
                )}
              </div>

              {/* details */}
              <div className="details flex-grow justify-center gap-1 font-medium h-14 flex flex-col">
                <span className="text-sm text-gray-800">{user.fullName}</span>
                {/* <span className="text-xs text-gray-400">
                  {user.latestMessageText.length >= 29
                    ? `${user.latestMessageText.substring(0, 27)}...`
                    : user.latestMessageText}
                </span> */}
              </div>

              {/* last chat time */}
              <div className="time text-xs text-gray-600 flex flex-col">
                <span>11.36</span>
                <span
                  className=" h-5 w-5 rounded-full text-gray-100 font-bold  flex items-center justify-center"
                  style={{ backgroundColor: "#f88417c0" }}
                >
                  5
                </span>
              </div>
            </div>
          ))}
      </div>

      <div className=" h-10 flex items-center justify-end pr-3 relative">
        <div
          className="p-3 bg-red-200 rounded-full z-20 hover:bg-red-100 cursor-pointer my-2 absolute"
          style={{ top: "-1em" }}
          onClick={() => deleteFriend(userOnFocus)}
        >
          <ImBin className="text-xl text-red-600 " />
        </div>
      </div>
    </div>
  );
};
