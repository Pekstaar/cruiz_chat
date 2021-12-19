// import {  } from "@firebase/auth";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db, googleAuthProvider } from "../../FirebaseConfig";
import { Context } from "../../Store/MainContext";

export const Form = () => {
  const { currentUser } = useContext(Context);

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    // handle submit
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      await updateDoc(doc(db, "users", result.user.uid), {
        status: "online",
      });
      setState({
        email: "",
        password: "",
      });
      history.push("/chat");
    } catch (err) {
      toast.error(err.message);
    }
  };
  const history = useHistory();

  const signinWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(async ({ user }) => {
        const userRef = collection(db, "users");

        // Create a query against the collection.
        const q = query(userRef, where("email", "==", user.email));
        const data = await getDocs(q);
        console.log(data.length);
        data.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((e) => console.error(e.message));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  React.useEffect(() => {
    if (currentUser) {
      history.push("/chat");
    }
  }, [currentUser, history]);

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

        {/* login header */}
        <h1 className="text-center flex-grow font-medium uppercase text-xl sm:text-2xl text-gray-600 py-5 sm:py-10">
          Log-in
        </h1>
      </div>
      <hr className="" />

      {/* login with google pop-up button */}
      <div className="pt-6 flex justify-center">
        <button
          className="uppercase p-3 bg-indigo-800 hover:bg-indigo-700 text-white  mx-5 w-full md:mx-0 md:w-4/6 rounded flex gap-6 justify-center font-medium items-center"
          type="button"
          onClick={() => signinWithGoogle()}
        >
          login with Google
          <FcGoogle className="text-3xl" />
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="form pb-6 flex items-center flex-col"
      >
        {/* or text seperator */}
        <span className="text-center text-gray-500 my-3 ">or</span>

        {/* email input field */}
        <input
          type="email"
          name="email"
          placeholder="email@email.com "
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          onChange={handleChange}
          value={state.email}
        />

        {/* password input field */}
        <input
          type="password"
          name="password"
          placeholder="password "
          className="p-3 my-2 outline-none border-gray-300 text-gray-500 rounded  border-1 mx-5 w-full md:mx-0 md:w-4/6"
          onChange={handleChange}
          value={state.password}
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
