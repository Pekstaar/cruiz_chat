import React, { useContext } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { Context } from "../../Store/context";

export const Signup = () => {
  const { handleSignUp } = useContext(Context);

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [formState, setFormState] = React.useState({
    id: shortid.generate(),
    fullName: "",
    email: "",
    password: "",
    status: "online",
    imageUrl: "",
    createdAt: "today",
    latestMessageText: "",
    messages: [],
  });

  // handleSubmit function

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSignUp(formState);
  };

  // handleValueChange function
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="lg:w-7/12 sm:w-3/4 w-full bg-white mt-20 py-4 px-2 sm:px-4">
      <h1 className="text-center font-medium uppercase text-xl sm:text-2xl text-gray-600 py-5 sm:py-10">
        Sign-up
      </h1>
      <hr className="" />

      <form
        onSubmit={handleSubmit}
        className="form py-6 flex items-center flex-col"
      >
        {/* firs and lastame */}
        <div className="names mx-5 w-full md:mx-0 md:w-4/6 md:flex gap-0.5 my-2">
          <input
            type="name"
            name="firstname"
            required
            placeholder="firstname "
            className="p-3 outline-none border-gray-300 text-gray-500 rounded w-full md:my-0 my-2 border-1 md:w-3/6"
            onChange={(e) => handleChange(e)}
            id=""
          />

          <input
            type="name"
            name="lastname"
            required
            placeholder="lastname "
            className="p-3 outline-none border-gray-300 text-gray-500 rounded w-full md:my-0 my-2 border-1 md:w-3/6"
            onChange={(e) => handleChange(e)}
            id=""
          />
        </div>

        {/* email input field */}
        <input
          type="email"
          name="email"
          required
          placeholder="email@email.com "
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          onChange={(e) => handleChange(e)}
          id=""
        />
        {/* password input field */}
        <input
          type="password"
          name="password"
          required
          placeholder="password "
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          onChange={(e) => handleChange(e)}
          id=""
        />

        {/* confirm input field */}
        <input
          type="password"
          required
          placeholder="confirm password "
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* login button */}
        <div className="submit mx-5 w-full md:mx-0 md:w-4/6  my-4 flex justify-center">
          <button
            type="submit"
            className={`uppercase w-3/4 text rounded-3xl p-3 bg-indigo-700 text-white hover:bg-indigo-800`}
          >
            Register
          </button>
        </div>
        {/* have no account link */}
        <Link
          as="span"
          to="/signin"
          className=" text-center mt-2 py-2 w-full text-sm md:mx-0 md:w-4/6 text-gray-500 hover:underline"
        >
          already have an account? click here to sign-in
        </Link>
      </form>
    </div>
  );
};
