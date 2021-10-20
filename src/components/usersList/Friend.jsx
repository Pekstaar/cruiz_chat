import React from "react";

export const Friend = (props) => {
  const { imgUrl, name, status } = props;

  return (
    <div className={friendStyle.container}>
      {/* img */}
      <div className="first_profilepic">
        <img
          className="object-cover h-14 w-14 rounded-full"
          src={imgUrl}
          alt={name && name.slice(" ")[0]}
        />
      </div>

      {/* username, status/lastmessage */}
      <div className="first_details flex flex-col flex-grow p-3">
        <span className="font-bold text-base">{name}</span>
        <span className=" text-gray-500 text-sm">
          {status === "active" ? "Active now" : "Offline"}
        </span>
      </div>

      {/* status indicator */}
      <div className="first_status">
        {status === "active" ? (
          <div className="dot rounded-full bg-green-600 p-1"> </div>
        ) : (
          <div className="dot rounded-full bg-gray-500 p-1"> </div>
        )}
      </div>
    </div>
  );
};

const friendStyle = {
  container:
    "bg-blue-dark border-solid border-t-2 py-0.5 px-3 pr-8 border-light-blue cursor-pointer user_first  flex items-center justify-center hover:bg-blue-tale",
};
