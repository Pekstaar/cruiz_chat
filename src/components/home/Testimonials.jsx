import React from "react";

export const Testimonials = () => {
  const svg = (
    <svg
      viewBox="0 0 200 187"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="blob "
    >
      <mask id="mask0" mask-type="alpha">
        <path
          d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
        />
        <image
          width="180px"
          style={{ textAlign: "center" }}
          href="https://www.pngkit.com/png/full/108-1082173_male-profile-face.png"
        />
      </g>
    </svg>
  );

  return (
    <div className="flex md:flex-row flex-col items-center">
      <div className="" style={{ padding: "50px" }}>
        {svg}
        <h2 className="text-center text-xl uppercase text-indigo-800 font-medium">
          David Beckham
        </h2>
      </div>

      <div className="testimonials flex flex-col items-center justify-center w-1/2">
        <h2
          className="text-2xl font-medium underline slab justify-self-start"
          style={{ color: "#172962" }}
        >
          TESTIMONIALS
        </h2>

        <p className="text-xl my-3 tracking-wide  text-gray-500 font-bold">
          Response by Satisfied Clients
        </p>

        <div className="flex gap-1 relative">
          <span
            className=" font-bold slab absolute text-indigo-900"
            style={{ fontSize: "4em", top: "-30px", left: "1.5em" }}
          >
            "
          </span>{" "}
          <p className="text-center py-3">
            While most brands and websites offer a <br /> ‘customer
            testimonials’ page (perhaps with some variation on the title),{" "}
            <br />
            this definitely should not be the only place you quote testimonials!
          </p>
        </div>
      </div>
    </div>
  );
};
