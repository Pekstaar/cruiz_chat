import React from "react";
import { BsFolderFill } from "react-icons/bs";
import { HiDotsVertical, HiOutlineLink } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import { IoDocumentSharp, IoDocumentsSharp } from "react-icons/io5";
import { IoMdPhotos, IoMdContact } from "react-icons/io";
import { ImMusic } from "react-icons/im";

export const Media = () => {
  return (
    <div className="media w-80 flex-shrink-0 border-gray-200 border-l-2 ">
      {/* header */}
      {/* title */}
      <div className="h-14 flex items-center justify-center slab text-xl text-gray-500 border-gray-200 border-b-2 mx-2 lowercase">
        Media
      </div>

      {/* details card */}
      {/* card rounded image */}
      <Card />

      {/* files */}
      {/* file icons */}
      <div className="file-icons flex justify-around p-2 mt-3">
        <FileCard bg={"bg-green-100"} text="All Files" number={230}>
          <BsFolderFill className={`text-2xl text-green-800`} />
        </FileCard>
        <FileCard bg={"bg-indigo-50"} text="All Links" number={120}>
          <div className={`p-2 bg-indigo-400 rounded-full`}>
            <HiOutlineLink className={`text-xl text-gray-100`} />
          </div>
        </FileCard>
      </div>

      {/* items */}
      <div className=" shared_items flex-grow">
        {/* header */}
        <div className="shared_items_header p-2 flex justify-between">
          {/* title */}
          <span className="text-gray-500">shared files</span>

          {/* verticaldots */}
          <HiDotsVertical className="text-xl text-gray-400 cursor-pointer" />
        </div>
        {/* list of items */}
        <div
          className="mediaList overflow-y-scroll flex flex-col"
          style={{ maxHeight: "375px" }}
        >
          {/* first */}
          <ListedItem
            background={"green"}
            name={"Documents"}
            details={"124 files, 193MB"}
          >
            <IoDocumentSharp className="text-2xl text-green-700" />
          </ListedItem>

          {/* second */}
          <ListedItem
            background={"yellow"}
            name={"Photos"}
            details={"292 files, 780MB"}
          >
            <IoMdPhotos className="text-2xl text-yellow-700" />
          </ListedItem>

          {/* Third */}
          <ListedItem
            background={"red"}
            name={"Audio"}
            details={"55 files, 120MB"}
          >
            <ImMusic className="text-2xl text-red-700" />
          </ListedItem>

          {/* Fourth */}
          <ListedItem
            background={"indigo"}
            name={"Contacts"}
            details={"55 files, 120MB"}
          >
            <IoMdContact className="text-3xl text-indigo-700" />
          </ListedItem>

          {/* Last */}
          <ListedItem
            background={"pink"}
            name={"Others"}
            details={"10 files, 50MB"}
          >
            <IoDocumentsSharp className="text-2xl text-pink-700" />
          </ListedItem>
        </div>
      </div>
    </div>
  );
};

const Card = ({ currentChat }) => (
  <div className="m-2 flex items-center justify-center flex-col gap-1 ">
    {/* user name */}
    <span className="font-medium text-base text-gray-700 mt-2">
      {currentChat && currentChat.name}
    </span>
    {/* image div */}
    <div className="img w-20 h-20 rounded-full border-2 border-gray-300 relative">
      {/* image/ */}
      <img
        src={currentChat && currentChat.imageUrl}
        alt=""
        className="h-full rounded-full w-full object-cover"
      />
      {/* status dot */}
      <div
        className={
          currentChat && currentChat.status === "active"
            ? "dot rounded-full bg-green-500 w-4 h-4 border-gray-100 border-4 p-1.5 absolute bottom-0 right-0"
            : `dot rounded-full bg-gray-400 w-4 h-4 border-gray-100 border-4 p-1.5 absolute bottom-0 right-0`
        }
      ></div>
    </div>

    {/* description */}
    <span className="font-light text-sm text-center">
      Lorem, ipsum dolor sit amet consectetur.
    </span>
  </div>
);

const FileCard = ({ bg, children, text, number }) => (
  <div
    className={`div ${bg} w-28 h-20 rounded-xl flex items-center gap-1 justify-center`}
  >
    {children}
    <div className="ml-1 text-gray-600">
      <span className="text-xs font block">{text}</span>
      <span className="text-xl  font-medium block">{number}</span>
    </div>
  </div>
);

const ListedItem = ({ name, details, background, children }) => (
  <div
    className={`item flex items-center hover:bg-${background}-100 cursor-pointer text-gray-600  py-2.5`}
  >
    {/* icon */}
    <div
      className={`icon flex items-center justify-center rounded-xl bg-${background}-100 w-12 h-12 mx-1`}
    >
      {children}
    </div>

    {/* details */}
    <div className="flex-grow flex flex-col justify-center pr-1">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-gray-500">{details}</span>
    </div>

    {/* icon */}
    <div className="icon mr-2">
      <BiChevronDown className="text-2xl text-gray-500" />
    </div>
  </div>
);
