import React from "react";

export const Footer = () => {
  const plusSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
  );

  return (
    <div className="absolute w-full bottom-0 bg-white  flex justify-end py-2 border-t-2 border-gray-400 px-4 sticky">
      <button className="pointer bg-gray-300 p-2 rounded-full hover:bg-gray-500 hover:text-white">
        <i>{plusSvg}</i>
      </button>
    </div>
  );
};
