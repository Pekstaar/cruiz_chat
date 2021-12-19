import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../Store/MainContext";
import { CircularProgress } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../FirebaseConfig";
import { doc, setDoc, Timestamp } from "firebase/firestore";

export const Signup = () => {
  const { loading } = useContext(Context);
  const history = useHistory();

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [formState, setFormState] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  // handleSubmit function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, firstname, lastname } = formState;

    if (formState.password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password).then((r) => {
        setDoc(doc(db, "users", r.user.uid), {
          uid: r.user.uid,
          fullName: `${firstname} ${lastname}`,
          email,
          createdAt: Timestamp.fromDate(new Date()),
          status: "online",
        }).then(() => {
          toast.success("user registered successfully!");
          history.push("/");
        });
      });
    } else {
      toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setFormState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });

    setConfirmPassword("");
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
      <div className="flex items-center">
        {/* home button */}
        <Link
          as="div"
          to="/"
          className={`h-14 flex items-center w-1/12 justify-end hover:text-green-600 cursor-pointer hover:border-green-600`}
          style={{ justifySelf: "start" }}
        >
          <FaHome className={`text-2xl text-gray-500  hover:text-indigo-800`} />
        </Link>

        <h1 className="text-center flex-grow font-medium uppercase text-xl sm:text-2xl text-gray-600 py-5 sm:py-10">
          Sign-up
        </h1>

        <div className="w-1/12 flex justify-start">
          {loading && <CircularProgress size={25} />}
        </div>
      </div>

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
            value={formState.firstname}
            placeholder="firstname "
            className="p-3 outline-none border-gray-300 text-gray-500 rounded w-full md:my-0 my-2 border-1 md:w-3/6"
            onChange={(e) => handleChange(e)}
          />

          <input
            type="name"
            name="lastname"
            required
            value={formState.lastname}
            placeholder="lastname "
            className="p-3 outline-none border-gray-300 text-gray-500 rounded w-full md:my-0 my-2 border-1 md:w-3/6"
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* email input field */}
        <input
          type="email"
          name="email"
          required
          value={formState.email}
          placeholder="email@email.com "
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          onChange={(e) => handleChange(e)}
        />
        {/* password input field */}
        <input
          type="password"
          name="password"
          required
          value={formState.password}
          placeholder="password"
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          onChange={(e) => handleChange(e)}
        />

        {/* confirm input field */}
        <input
          type="password"
          required
          value={confirmPassword}
          placeholder="confirm password "
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* login button */}
        <div className="submit mx-5 w-full md:mx-0 md:w-4/6  my-4 flex justify-center">
          <button
            disabled={loading && true}
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
