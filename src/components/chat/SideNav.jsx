import React, { useState } from "react";
import { Link } from "react-router-dom";
// icons
import { FaHome, FaVideo, FaList } from "react-icons/fa";
import { MdGroup, MdSettingsSuggest } from "react-icons/md";
import { IoLogoWechat } from "react-icons/io5";

export const SideNav = () => {
  const [current, setCurrent] = useState("friendschat");

  const commonStyle = {
    gray500: "text-gray-400",
    textxl: "text-xl ",
    span: "hover:bg-green-100 hover:text-green-800 rounded-xl p-3.5 cursor-pointer",
  };

  const handleSpan = (btn) => {
    if (btn === current) {
      return "bg-green-100 text-green-800 rounded-xl p-3.5 cursor-pointer";
    } else
      return "hover:bg-green-100 hover:text-green-800 rounded-xl p-3.5 cursor-pointer";
  };

  return (
    <div className="flex-shrink-0">
      <div className="sidelist border-gray-200 border-r-2 h-full w-16 p-1 flex flex-col justify-between items-center">
        {/* profile menu */}
        <Link
          as="div"
          to="/"
          className={`h-14 border-gray-200 border-b-2 rounded-t-2xl flex items-center justify-center w-full hover:text-green-600 cursor-pointer hover:border-green-600`}
        >
          <FaHome className={`text-2xl text-gray-500  hover:text-green-600`} />
        </Link>
        {/* menu */}
        <div
          className={`menu flex flex-col gap-3 items-center ${commonStyle.gray500}`}
        >
          {/* contact list */}
          <Link
            to="/chat/contacts"
            as="span"
            className={` ${handleSpan("contacts")}`}
            onClick={() => setCurrent("contacts")}
          >
            <FaList className={`${commonStyle.textxl}`} />
          </Link>

          {/* Friends chat */}
          <Link
            to="/chat"
            as="span"
            className={` ${handleSpan("friendschat")}`}
            onClick={() => setCurrent("friendschat")}
          >
            <IoLogoWechat className={`${commonStyle.textxl}`} />
          </Link>

          {/* group chat page */}
          <Link
            to="/chat/"
            as="span"
            className={` ${handleSpan("groupschat")}`}
            onClick={() => setCurrent("groupschat")}
          >
            <MdGroup className={`${commonStyle.textxl}`} />
          </Link>

          {/* video Call */}
          <Link
            to="/chat/"
            as="span"
            className={` ${handleSpan("videocall")}`}
            onClick={() => setCurrent("videocall")}
          >
            <FaVideo className={`${commonStyle.textxl}`} />
          </Link>

          {/* configurations */}
          <Link
            to="/chat/"
            as="span"
            className={` ${handleSpan("configs")}`}
            onClick={() => setCurrent("configs")}
          >
            <MdSettingsSuggest className={`text-2xl`} />
          </Link>
        </div>

        {/* profile image */}
        <div
          className="profileImage p-1"
          style={{ width: "60px", height: "60px" }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg"
            alt=""
            height="100%"
            width="100%"
            className="rounded-full "
          />
        </div>
      </div>
    </div>
  );
};
