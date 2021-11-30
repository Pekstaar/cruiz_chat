import React, { useContext, useState } from "react";
import { MdOutlineSearch, MdOutlineAdd } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { Context } from "../../Store/MainContext";
import DialogModal from "../DialogModal";

export const Users = () => {
  const {
    updateCurrent,
    userOnFocus,
    setUserOnFocus,
    currentUser,
    allUsers,
    friends
  } = useContext(Context);

  const [displayModal, setDisplayModal] = useState(false);
  const [users, setUsers] = useState(friends);

  const names = currentUser && currentUser.fullName && currentUser.fullName.split(" ");



  React.useEffect(() => {
    setUsers(friends);
  }, [friends]);
  // const [toSearch, setToSearch] = useState("");/

  // useMemo(() => {
  const filterUsers = (searchValue, userArray) => {
    let filteredData = [];
    if (searchValue === "") {
      setUsers(friends);
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

    setUsers(filteredData);
  };

  return (
    <div className="users w-80 h-full p-1 pb-5 flex-shrink-0">
      {/* Navigation */}
      <div className="nav w-full text-gray-600 h-14 border-gray-200 flex items-center justify-center border-b-2 ">
        <span className="slab text-xl uppercase font-medium">Chats</span>
      </div>

      {/* friends profile */}
      <div className="h-44 bg-indigo-50 m-2 flex items-center justify-center flex-col gap-1">
        {/* image div */}
        <div className="img w-20 h-20 flex items-center justify-center bg-green-200 rounded-full border-2 border-white relative">
          {/* image/ */}
          {
            currentUser && currentUser.imageUrl && currentUser.imageUrl !== "" && currentUser.imageUrl !== null ?
              <img
                src={currentUser && currentUser.imageUrl}
                alt=""
                className="h-full rounded-full w-full object-cover"
              />
              :
              <span className="font-medium slab text-3xl text-green-800">{names && names[0].substring(0, 1)}{names && names[1].substring(0, 1)}</span>
          }

          {/* status dot */}
          <div
            className={
              currentUser.status && currentUser.status === "online"
                ? "dot rounded-full bg-green-500 w-4 h-4 border-gray-100 border-4 p-1.5 absolute bottom-0 right-0"
                : `dot rounded-full bg-gray-400 w-4 h-4 border-gray-100 border-4 p-1.5 absolute bottom-0 right-0`
            }
          ></div>
        </div>
        {/* user name */}
        <span className="font-medium text-base slab font-light text-xl text-gray-500 ">
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
          onChange={(e) => filterUsers(e.target.value, friends)}
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
          <DialogModal setDisplay={setDisplayModal} users={allUsers} />
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
        className="userlist py-3 overflow-y-scroll "
        style={{ height: "390px" }}
      >
        {users &&
          users.map((user) => (
            <div
              className={`user m-1 p-2 hover:bg-gray-100 flex gap-2 cursor-pointer ${userOnFocus === user.id ? "bg-indigo-50" : ""
                }`}
              key={user.id}
              onClick={() => {
                updateCurrent(user);
                setUserOnFocus(user.id);
              }}
            >
              {/* image */}
              <div className="img w-14 h-14 rounded-full border-2 flex-shrink-0 border-gray-300 relative flex items-center justify-center bg-green-200 ">
                {/* image/ */}

                {user && user.imageUrl ?
                  <img
                    src={user.imageUrl}
                    alt=""
                    className="h-full w-full rounded-full object-cover"
                  /> :
                  <span className="font-medium slab text-3xl text-green-800">{user && user.fullName.substring(0, 1)}</span>
                }
                {user.status === "active" ? (
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
    </div>
  );
};
