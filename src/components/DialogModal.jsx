import React, { useState } from "react";
import { MdAddCircle, MdCancel } from "react-icons/md";

const DialogModal = ({ setDisplay }) => {
  const [newEmail, setNewEmail] = useState("");

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-50 inset-0 z-0"></div>
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-indigo-100 ">
        {/* <!--content--> */}
        <div className="text-center">
          <span className="text-gray-600"> Add new Friend</span>
          {/* <!--body--> */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(newEmail);
              setNewEmail(" ");
            }}
            className="text-center p-5 flex-auto justify-center"
          >
            <input
              type="email"
              placeholder="newfriend@email.com"
              className="p-2.5 outline-none rounded-2xl w-full text-sm text-gray-600"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button
              onClick={() => setDisplay(false)}
              type="submit"
              className="mb-2 md:mb-0  outline-none font-bold shadow-sm text-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg  absolute top-0 right-0"
            >
              <MdCancel className="text-red-500 text-3xl hover:text-red-600" />
            </button>
          </form>
          {/* <!--footer--> */}
          <div className="p-3  text-center space-x-4 md:block">
            <button
              onClick={() => {
                console.log(newEmail);
                setDisplay(false);
              }}
              className="mb-2 md:mb-0 bg-gray-100 text-sm shadow-sm font-medium tracking-wider text-gray-100 rounded-full "
            >
              <MdAddCircle className="text-green-500 rounded-full text-4xl hover:shadow-lg hover:text-green-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogModal;
