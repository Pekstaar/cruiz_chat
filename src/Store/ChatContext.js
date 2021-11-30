import React, { useState } from "react";
import { conversations } from "../components/usersList/data";
import { Context } from "./MainContext";
import {
  googleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  db,
  // setDoc,
} from "../FirebaseConfig";
import {
  doc,
  setDoc,
  onSnapshot,
  getDocs,
  collection,
  query,
  where,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { firebaseTimeStamp } from "../FirebaseConfig";

// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "../FirebaseConfig";

export const ChatContext = (props) => {
  const { children } = props;
  const history = useHistory();
  const auth = getAuth();

  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentChat, setCurrentChat] = useState(conversations[0]);
  const [userOnFocus, setUserOnFocus] = useState(conversations[0].id);
  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState([]);

  // logout end

  //toast function
  const showToast = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const showErrorToast = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const setState = (state) => {
    setCurrentChat(state);
  };
  // sign in with google setup
  const signInWithGoogle = () =>
    signInWithPopup(auth, googleAuthProvider)
      .then((res) => {
        showToast("Login Success!");
        history.push("/chat");
      })
      .catch((e) => console.error(e.message));
  // signIn with google end

  // signup start
  const registerUser = (credentials) => {
    const { password, firstname, lastname, email } = credentials;
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((r) => {
        setDoc(doc(db, "users", r.user.uid), {
          fullName: `${firstname} ${lastname}`,
          email,
          status: "online",
          imageUrl: "",
          friends: [],
          createdAt: firebaseTimeStamp.fromDate(new Date()),
        })
          .then(() => {
            showToast("Sign up successful!");
            setLoading(false);
          })
          .catch((e) => {
            console.log(e.message);
            showErrorToast(e.message);
            setLoading(false);
          });

        // console.log(r)
      })
      .catch((e) => {
        console.error(e.message);
        setLoading(false);
      });
  };
  // signup end

  // login funciton start
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        showToast("Login Success!");
        history.push("/chat");
      })
      .catch((e) => {
        console.error("login Error!", e.message);
        showErrorToast("Login error!");
      });
  };
  // login function end

  // chatting friends

  // \chatting friends end

  // logout function
  const logOut = () =>
    signOut(auth).then(() => {
      showToast("Logout Success!");
      history.push("/");
    });

  // fetch all users
  const fetchAllUsers = async () => {
    const data = await getDocs(collection(db, "users"));
    let list = [];
    let filteredList = friends;

    data.forEach((d) => {
      const user = d.data();
      if (user.email !== currentUser.email) {
        list.push(d.data().email);
      }
    });

    filteredList.forEach((f) => {
      filteredList = list.filter((e) => e !== f.email);
    });
    console.log(filteredList);
    setUsers(list);
    // console.log(list);
  };
  // end of fetch all users function

  // add Friend function
  const addFriend = async (email) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((q) => {
        const currentFriends = currentUser.friends;
        // const item = q.data()
        const current = doc(db, "users", currentUser.id);

        updateDoc(current, {
          friends: [...currentFriends, q.id],
        });

        showToast("User Added successfully!");
      });
    } catch (err) {
      console.error(err.message);
    }

    // try {
    //   const usersRef = collection(db, "users");
    //   const q = query(usersRef, where("email", "==", { email }));
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((d) => {
    //     // add id to friends lists
    //     const currentFriends = currentUser.friends

    //     const current = doc(db, "users", currentUser.id);

    //     updateDoc(current, {
    //       friends: [...currentFriends, d.uid]
    //     });

    //     showToast("User Added successfully!")
    //     setLoading(false)

    //     // console.log("Fetched User", d.data());
    //     // // console.log("friends: ", currentUser);
    //   });
    // } catch (error) {
    //   console.error(error.message);
    //   setLoading(false)
    // }
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onSnapshot(doc(db, "users", user.uid), (d) => {
          setCurrentUser({ id: user.uid, ...d.data(), status: "online" });
          // console.log(d.data().friends)

          // setFriends(doc.data().friends)
          // console.log("current User", doc.data().friends)
        });

        // update status to online.
      } else {
        setCurrentUser(null);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  React.useEffect(() => {
    fetchAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friends]);

  React.useEffect(() => {
    const getFriends = async () => {
      let arr = [];

      for (const f of currentUser.friends) {
        const docRef = doc(db, "users", f);
        const docSnap = await getDoc(docRef);

        arr.push({ id: docSnap.id, ...docSnap.data() });
      }

      setFriends(arr);
    };

    currentUser && currentUser.friends && getFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <Context.Provider
      value={{
        // conversations: friends,
        currentChat,
        userOnFocus,
        setUserOnFocus,
        loading,
        updateCurrent: (current) => {
          setState(current);
        },
        handleSignUp: registerUser,
        // sign with google variables
        signInWithGoogle,
        logOut,
        // login:
        login: loginUser,
        currentUser,
        allUsers: users,
        addFriend,
        friends,
      }}
    >
      {children}
    </Context.Provider>
  );
};
