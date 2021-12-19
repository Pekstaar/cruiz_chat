import { Icon, Tooltip } from "@mui/material";
import { updateEmail, updatePassword } from "firebase/auth";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { FaCamera, FaUserFriends } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { SideNav } from "../../components/chat";
import { auth, db, storage } from "../../FirebaseConfig";
import { Context } from "../../Store/MainContext";

export const Settings = () => {
  const { currentUser } = useContext(Context);

  const [currentUserDetails, setCurrentUserDetails] = useState();

  useEffect(() => {
    if (currentUser) {
      const getDetails = async () => {
        onSnapshot(doc(db, "users", currentUser.uid), (docSnap) => {
          if (docSnap.exists()) {
            setCurrentUserDetails({ ...docSnap.data(), ...currentUser });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        });
      };

      getDetails();
    }
  }, [currentUser]);
  return (
    <main
      className="bg-white container mx-auto my-4 flex"
      style={{ height: "96vh", minHeight: "730px" }}
    >
      {/* side Icons Nav */}
      <SideNav />

      {currentUserDetails && <Panel currentUser={currentUserDetails} />}
    </main>
  );
};

const Panel = ({ currentUser }) => {
  const names =
    currentUser && currentUser.fullName && currentUser.fullName.split(" ");

  const [fullName, setFullName] = useState(
    currentUser && currentUser.fullName && currentUser.fullName
  );
  const [about, setAbout] = useState(currentUser.about && currentUser.about);
  const [email, setEmail] = useState(currentUser.email && currentUser.email);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (photo) {
      const uploadImage = async () => {
        if (currentUser.imagePath) {
          await deleteObject(ref(storage, currentUser.imagePath));
        }

        const imageRef = ref(
          storage,
          `profiles/ ${new Date().getTime()}_${photo.name}`
        );

        uploadBytes(imageRef, photo)
          .then(async (r) => {
            try {
              const fullPath = r.ref.fullPath;
              const url = await getDownloadURL(ref(storage, fullPath));

              await updateDoc(doc(db, "users", currentUser.uid), {
                imageUrl: url,
                imagePath: fullPath,
              });
            } catch (error) {
              toast.error(error.message);
            }

            setPhoto("");

            toast.success(`Profile update Success!`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch((err) => {
            toast.error(`upload Error! ${err.message}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      };
      uploadImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, photo]);

  return (
    <div className=" flex flex-grow overflow-y-scroll">
      <div className="md:w-5/12 mx-auto px-2 flex flex-col ">
        {/* header */}
        <div className="flex p-3 justify-between top-0 sticky bg-white z-50">
          {/* arrow */}
          <Icon className="cursor-pointer">
            <BsChevronLeft />
          </Icon>

          {/* text */}
          <span className="font-semibold">Manage Profile</span>
          {/* icon */}

          <Icon className="cursor-pointer">
            <FaUserFriends />
          </Icon>
        </div>
        {/* your profile */}
        <div className=" bg-indigo-50 m-2 flex items-center justify-center flex-col gap-1">
          {/* image div */}
          <div className="img w-20 h-20 flex items-center justify-center bg-green-200 rounded-full border-2 border-white relative">
            {/* image/ */}
            {currentUser &&
            currentUser.imageUrl &&
            currentUser.imageUrl !== "" &&
            currentUser.imageUrl !== null ? (
              <img
                src={currentUser && currentUser.imageUrl}
                alt=""
                className="h-full rounded-full w-full object-cover"
              />
            ) : (
              <span className="font-medium slab text-3xl text-green-800">
                {names && names[0].substring(0, 1)}
                {names && names[1].substring(0, 1)}
              </span>
            )}

            {/* status dot */}
            <div
              className={
                currentUser &&
                currentUser.status &&
                currentUser.status === "online"
                  ? "dot rounded-full bg-green-500 w-4 h-4 border-gray-100 border-4 p-1.5 absolute bottom-0 right-0"
                  : `dot rounded-full bg-gray-400 w-4 h-4 border-gray-100 border-4 p-1.5 absolute bottom-0 right-0`
              }
            ></div>
          </div>
          {/* user name */}
          <span className="font-medium text-base slab  text-gray-500 ">
            {currentUser && currentUser.fullName}
          </span>
          {/* user name */}

          {currentUser.about && (
            <span className="text-base slab  text-gray-500 ">
              {currentUser && currentUser.about}
            </span>
          )}
          {/* status */}
          {currentUser && currentUser.status === "online" ? (
            <div className="status bg-green-300 rounded text-sm text-green-800 p-1">
              online
            </div>
          ) : (
            <div className="status bg-gray-300 rounded text-sm text-gray-500 p-1">
              offline
            </div>
          )}
          <div className="buttons p-4 flex gap-2 items-center">
            <div>
              <Tooltip
                className="cursor-pointer"
                title="change profile photo"
                placement="top"
              >
                <label htmlFor="uploader">
                  <FaCamera className="text-2xl text-indigo-700" />
                </label>
              </Tooltip>
              <input
                id="uploader"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
            </div>

            <Tooltip
              className="cursor-pointer"
              title="remove profile photo"
              placement="top"
              onClick={async () => {
                if (currentUser.imagePath) {
                  if (
                    window.confirm(
                      "Are you sure you want to remove profile photo?"
                    )
                  ) {
                    try {
                      // delete from store
                      await deleteObject(ref(storage, currentUser.imagePath));

                      // firestore update
                      await updateDoc(doc(db, "users", currentUser.uid), {
                        imageUrl: "",
                        imagePath: "",
                      });

                      toast.success("profile image deleted successfully!");
                    } catch (error) {
                      toast.error(error.message);
                    }
                  }
                }
              }}
            >
              <span>
                <MdDelete className="text-2xl text-red-600" />
              </span>
            </Tooltip>
          </div>
        </div>

        <div className="fullName">
          {/* email input field */}
          <label htmlFor="fullname">name</label>
          <form
            onSubmit={(e) => {
              // updateFirebaseprofile
              e.preventDefault();

              const userRef = doc(db, "users", currentUser.uid);

              // Set the "capital" field of the city 'DC'
              updateDoc(userRef, {
                fullName,
              })
                .then(() => {
                  toast.success("Name updated Successfully!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                })
                .catch((err) => {
                  toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            }}
            action=""
            className="flex items-center gap-2"
          >
            <input
              id="fullname"
              type="text"
              name="name"
              className="p-3 my-2 outline-none bg-gray-50 text-gray-500 rounded w-full"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName && fullName}
            />

            {/* udpate button */}
            <input
              type="submit"
              className="bg-indigo-700 p-1 text-sm text-white rounded-sm h-12 cursor-pointer"
              value="update"
            />
          </form>
        </div>
        {/* about you */}
        <div className="about">
          {/* email input field */}
          <label htmlFor="about">about</label>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const userRef = doc(db, "users", currentUser.uid);

              // Set the "capital" field of the city 'DC'
              updateDoc(userRef, {
                about,
              })
                .then(() => {
                  toast.success("your description updated Successfully!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                })
                .catch((err) => {
                  toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            }}
            action=""
            className="flex items-center gap-2"
          >
            <textarea
              id="about"
              type="text"
              name="about"
              placeholder="-- brief description about you --"
              className="p-3 my-2 outline-none bg-gray-50 text-gray-500 rounded w-full"
              onChange={(e) => setAbout(e.target.value)}
              value={about && about}
            />

            {/* udpate button */}
            <input
              type="submit"
              className="bg-indigo-700 p-1 text-sm text-white rounded-sm h-12 cursor-pointer"
              value="update"
            />
          </form>
        </div>

        {/* about you */}
        <div className="email">
          {/* email input field */}
          <label htmlFor="email">email</label>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const userRef = doc(db, "users", currentUser.uid);

              // update authentication
              // update firestore

              updateEmail(auth.currentUser, email)
                .then(() => {
                  // Email updated!
                })
                .then(() => {
                  // Set the "email" field of the city 'DC'
                  updateDoc(userRef, {
                    email,
                  }).then(() => {
                    toast.success("email updated Successfully!", {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  });
                })
                .catch((err) => {
                  toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            }}
            action=""
            className="flex items-center gap-2"
          >
            <input
              id="email"
              type="email"
              name="name"
              placeholder="-- brief description about you --"
              className="p-3 my-2 outline-none bg-gray-50 text-gray-500 rounded w-full"
              onChange={(e) => setEmail(e.target.value)}
              value={email && email}
            />

            {/* udpate button */}
            <input
              type="submit"
              className="bg-indigo-700 p-1 text-sm text-white rounded-sm h-12 cursor-pointer"
              value="update"
            />
          </form>
        </div>

        <form
          onSubmit={(e) => {
            // check if new passwords are similar
            e.preventDefault();

            if (newPassword !== confirmPassword) {
              toast.error("passwords do not match!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              updatePassword(auth.currentUser, newPassword)
                .then(() => {
                  toast.success("Password Updated Successfully!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                })
                .catch((err) => {
                  // An error ocurred
                  toast.error(err.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            }
          }}
          className="flex flex-col"
        >
          {/* new password*/}
          <div className="newpassword mt-2">
            {/* email input field */}
            <label htmlFor="newpassword">new password</label>
            <input
              id="newpassword"
              type="password"
              name="newpassword"
              placeholder="enter new password"
              className="p-3 my-2 outline-none bg-gray-50 text-gray-500 rounded w-full"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          {/* confirm password*/}
          <div className="confirm_password mt-2">
            {/* email input field */}
            <label htmlFor="confirmpassword">confirm password</label>
            <input
              id="confirmpasswrod"
              type="password"
              name="confirm password"
              placeholder="confirm new password"
              className="p-3 my-2 outline-none bg-gray-50 text-gray-500 rounded w-full"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-700 rounded p-2 my-3 self-center md:w-6/12 text-white "
          >
            reset password
          </button>
        </form>
      </div>
    </div>
  );
};
