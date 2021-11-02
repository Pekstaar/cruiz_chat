import React from "react";
import { Link } from "react-router-dom";

export const Carousel = () => {
  return (
    <div
      className="mx-auto md:flex block items-center text-white"
      style={{
        height: "650px",
        backgroundImage:
          "linear-gradient(to bottom right, #14255Af0, #14255Ab0), url('https://static.nc-img.com/pp/cms/support-live-chat/images/live-chat-meta-facebook-share.e0459813fc736e905bd82c110453b1fb.png') ",
      }}
    >
      <div className="text-gray-300 w-1/2 flex flex-col items-center">
        <span style={{ fontSize: "60px", fontWeight: "bold" }}>
          Have your best <br /> chat{" "}
          <span className="underline">Experience</span>
        </span>
        <span style={{ fontSize: "25px" }}>
          Fast, easy, unlimited chat services
        </span>
        <Link
          className="my-7 bg-yellow-500 text-gray-800 hover:bg-yellow-400 text-xl slab capitalize px-7 py-3"
          as="button"
        >
          try for free
        </Link>
      </div>
      <div className="images w-1/2 md-flex block justify-around">
        <img
          src="https://uploads-ssl.webflow.com/5ec19145e5370d18c6fc5c9e/5ecc2f8b71c39539a4032f9a_hero-section-img-min.png"
          alt="img-1"
          width="60%"
        />
      </div>
    </div>
  );
};
