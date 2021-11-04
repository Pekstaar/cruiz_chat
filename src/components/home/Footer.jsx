import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import Popper from "../Popper";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#08112D",
        marginTop: ".5em",
        position: "absolute",
        width: "100%",
      }}
    >
      <div className="p-6  text-gray-300 w-full flex md:flex-row md:gap-auto gap-5 flex-col space-between justify-around items-center">
        {/* footer logo */}
        <div className="lgo">
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
            <span className="slab text-xl text-gray-100 uppercase">
              Cruizchat
            </span>
            <Popper />
          </div>

          <img
            src="http://droitthemes.com/html/makro/demo/assets/images/sms_comment_1.png"
            alt=""
          />
        </div>

        {/* footer nav */}
        <ul className="flex flex-col gap-1 font-medium text-base">
          <h2 className="underline tracking-wider slab text-xl">Pages</h2>
          <Link>Home</Link>
          <Link>Chat</Link>
          <a href="#about">About</a>
          <Link>Terms</Link>
          <Link>Blog</Link>
        </ul>

        {/* contacts */}
        <div className="contacts flex flex-col gap-3">
          <h2 className="underline text-center capitalize slab text-xl">
            Contacts
          </h2>
          <span className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            cruizchat@gmail.com
          </span>
          <span className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
            +254 0790 876 004
          </span>
          <span className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +020 6785 211
          </span>
          <span className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                clip-rule="evenodd"
              />
            </svg>
            www.cruizchat.com
          </span>

          <div className="icons flex gap-3 text-2xl justify-center py-3 text-inherit">
            {/* facebook */}
            <a href="https://facebook.com">
              <BsFacebook />
            </a>

            {/* git */}
            <a href="https://github.com/pekstaar">
              <AiFillGithub />
            </a>
            {/* twitter */}
            <a href="https://twitter.com">
              <AiFillTwitterCircle />
            </a>
            {/* linked in */}
            <a href="https://linkedin.com">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-300 flex justify-between">
        <div id="designedBy" className="text-gray-500 p-3">
          Designed By: PEKSTER CODERS
        </div>
        <h3 className="text-center">Copyright © 2020 Pekstar Coders</h3>
        <a href="/terms" className="mx-4 text-yellow-500 hover:underline">
          Terms of Use
        </a>
      </div>
    </div>
  );
};
