// import {  } from "@firebase/auth";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Context } from "../../Store/MainContext";


export const Form = () => {
  const { signInWithGoogle } = useContext(Context);

  return (
    <div className="lg:w-7/12 sm:w-3/4 w-full bg-white mt-20 py-4 px-2 sm:px-4">
      <h1 className="text-center font-medium uppercase text-xl sm:text-2xl text-gray-600 py-5 sm:py-10">
        Log-in
      </h1>
      <hr className="" />

      {/* login with google pop-up button */}
      <div className="pt-6 flex justify-center">
        <button
          className="uppercase p-3 bg-indigo-800 hover:bg-indigo-700 text-white  mx-5 w-full md:mx-0 md:w-4/6 rounded flex gap-6 justify-center font-medium items-center"
          type="button"
          onClick={() => signInWithGoogle()}
        >
          login with Google
          <FcGoogle className="text-3xl" />
        </button>
      </div>

      <form action="" className="form pb-6 flex items-center flex-col">
        {/* or text seperator */}
        <span className="text-center text-gray-500 my-3 ">or</span>

        {/* email input field */}
        <input
          type="email"
          name="email"
          placeholder="email@email.com "
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          id=""
        />

        {/* password input field */}
        <input
          type="password"
          name="password"
          placeholder="password "
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          id=""
        />

        {/* forgot password link to:/forgotpassword */}
        <Link
          as="span"
          to="/forgotpassword"
          className="mx-5 py-2 text-sm w-full md:mx-0 md:w-4/6 text-gray-500 hover:underline"
        >
          Forgot Password? click here to reset.
        </Link>

        {/* login button */}
        <div className="submit mx-5 w-full md:mx-0 md:w-4/6  my-4 flex justify-center">
          <button
            type="submit"
            className={`uppercase w-3/4 text rounded-3xl p-3 bg-indigo-700 text-white hover:bg-indigo-800`}
          >
            login
          </button>
        </div>

        {/* have no account link */}
        <Link
          as="span"
          to="/signup"
          className=" text-center mt-2 py-2 w-full md:mx-0 md:w-4/6 text-gray-500 hover:underline"
        >
          Have no account? click here to sign-up
        </Link>
      </form>
    </div>
  );
};
