import React from "react";

export const ChatHeader = () => {
  const [userDetails, setUserDetails] = React.useState({
    imageUrl: "",
    username: "",
    active: false,
  });

  React.useEffect(() => {
    setUserDetails({
      imageUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      username: "Eric Pekmah",
      active: true,
    });
  }, []);

  return (
    <div className="flex py-1 mt-2 px-3">
      {/* image */}
      <img
        src={userDetails.imageUrl}
        alt="profileImage"
        className="object-cover w-16 h-16 rounded-full "
      />

      {/* userdetails */}
      <div className="user_details flex flex-col flex-1 px-4 justify-center ml-1">
        <span className="block font-bold text-lg">{userDetails.username}</span>

        <div className="block text-gray-600 font-light">
          {userDetails.active ? "Active now" : "offline"}
        </div>
      </div>

      {/* button */}
      <button className="bg-gray-700 p-2.5 m-auto rounded-sm text-white uppercase">
        Logout
      </button>
    </div>
  );
};
