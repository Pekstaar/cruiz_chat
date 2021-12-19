import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { MdAddCircle, MdCancel } from "react-icons/md";
import { toast } from "react-toastify";
import { db } from "../FirebaseConfig";
import { Context } from "../Store";

const DialogModal = ({ setDisplay, users }) => {
  const { currentUser } = useContext(Context);

  const [state, setState] = useState("");

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
              setState(" ");
            }}
            className="text-center p-5 flex-auto justify-center"
          >
            <FormControl fullWidth className="text-left">
              <InputLabel id="demo-simple-select-label">
                Select Friend
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state}
                label="Select friend"
                onChange={(e) => setState(e.target.value)}
              >
                {users &&
                  users.map((u) => (
                    <MenuItem key={u.uid} value={u.uid}>
                      {u.email}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <button
              onClick={() => setDisplay(false)}
              type="submit"
              className="mb-2 md:mb-0  outline-none  shadow-sm text-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg  absolute top-0 right-0"
            >
              {/* {loading ? */}
              <MdCancel className="text-red-500 text-3xl hover:text-red-600" />
              {/* :
                <CircularProgress size={25} />
              } */}
            </button>
          </form>
          {/* <!--footer--> */}
          <div className="p-3  text-center space-x-4 md:block">
            <button
              onClick={async () => {
                // addFriend(state);c
                const friendRef = doc(db, "users", state);
                const userRef = doc(db, "users", currentUser.uid);

                // Set the "capital" field of the city 'DC'
                try {
                  await updateDoc(friendRef, {
                    friends: arrayUnion(currentUser.uid),
                  });

                  await updateDoc(userRef, {
                    friends: arrayUnion(state),
                  });

                  toast.success("User added successfully!");
                } catch (error) {}
                setState("");
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
