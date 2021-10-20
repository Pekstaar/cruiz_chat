import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const styles = {
    navFrame: "p-4 flex items-center container mx-auto",
    buttonSignUp:
      "p-2 rounded  px-5 border-2 border-green-500 hover:bg-green-500 hover:text-white uppercase text-gray-500 ",
    li: "text-gray-600 uppercase text-base hover:text-green-600 hover:border-green-600 border-b-2",
  };

  return (
    <nav className="mb-2 sticky top-0" style={{ backgroundColor: "#E5E7EBdd" }}>
      {/* logo */}
      <div className={styles.navFrame}>
        <div className="logo flex items-center gap-2 ">
          <i className="text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          </i>
          <span className="slab text-base text-gray-700 uppercase">
            Cruizchat
          </span>
        </div>
        {/* navlist */}
        <ul className="list flex flex-grow justify-end mx-8 gap-6">
          <Link
            className="text-green-600 uppercase text-base border-b-2 border-green-500"
            as="li"
          >
            Home
          </Link>
          <Link className={styles.li} as="li">
            Chat
          </Link>
          <a className={styles.li} href="#about">
            about
          </a>
          <Link className={styles.li} as="li">
            Terms
          </Link>
          <Link className={styles.li} as="li">
            Blog
          </Link>
        </ul>
        {/* navbuttons */}
        <div className="buttons ml-8 flex gap-4">
          <button className="p-1 rounded px-5 bg-indigo-600 text-white uppercase opacity-80 hover:bg-indigo-800">
            Sign-in
          </button>
          <button className={styles.buttonSignUp}>Sign-up</button>
        </div>
      </div>
    </nav>
  );
};
