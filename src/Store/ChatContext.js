import React, { useState } from "react";
// import { conversations } from "../components/usersList/data";
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
  // getDoc,
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
  const [userOnFocus, setUserOnFocus] = useState();
  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState([]);
  const [allChats, setAllChats] = useState([]);
  const [currentChat, setCurrentChat] = useState({
    messages: [],
  });
  const [userOnView, setUserOnView] = useState({});

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
        const userRef = collection(db, "users");

        // Create a query against the collection.
        const q = query(userRef, where("email", "==", res.email));
        if (q.exists()) {
          history.push("/chat");
        } else {
          setDoc(doc(db, "users", res.uid), {
            // fullName: `${firstname} ${lastname}`,
            email: res.email,
            status: "online",
            imageUrl: "",
            friends: [],
            createdAt: firebaseTimeStamp.fromDate(new Date()),
          });
          history.push("/chat");
        }
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
  const logOut = async () => {
    try {
      updateDoc(doc(db, "users", currentUser.id), {
        status: "offline",
      }).then(() =>
        signOut(auth).then(() => {
          showToast("Logout Success!");
          history.push("/");
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  // fetch all users
  const fetchAllUsers = async () => {
    const data = await getDocs(collection(db, "users"));
    let list = [];
    let friendsList = [];

    friends.forEach((f) => {
      friendsList.push(f.email);
    });

    data.forEach((d) => {
      const user = d.data();
      if (user.email && user.email !== currentUser.email) {
        if (!friendsList.includes(user.email)) {
          list.push(user.email);
        }
      }
    });
    // console.log(friendsList);
    setUsers(list);
    // console.log(list);
  };
  // end of fetch all users function

  // fetch chats
  const fetchChats = async () => {
    const querySnapshot = await getDocs(collection(db, "chats"));
    let list = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // setAllChats([...allChats, { id: doc.id, ...doc.data() }]);
      list.push({ id: doc.id, ...doc.data() });
    });

    setAllChats(list);
  };
  // end of fetch chats

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

  // React.useEffect(() => {
  //   allChats.length !== 0 && setCurrentChat(allChats[0]);
  // }, [allChats]);

  // set chats useEffect
  React.useEffect(() => {
    currentUser && fetchChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onSnapshot(doc(db, "users", user.uid), (d) => {
          setCurrentUser({ id: user.uid, ...d.data() });
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
    const getCurrentUserFriends = async () => {
      if (friends.length !== 0) {
        fetchAllUsers();
        setUserOnFocus(friends[0].id);
      } else {
        const data = await getDocs(collection(db, "users"));
        let list = [];

        data.forEach((d) => {
          const user = d.data();

          if (user.email && user.email !== currentUser.email) {
            list.push(user.email);
          }
        });

        setUsers(list);
      }
    };

    getCurrentUserFriends();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friends]);

  React.useEffect(() => {
    const getFriends = async () => {
      let arr = [];

      for (const f of currentUser.friends) {
        const docRef = doc(db, "users", f);

        onSnapshot(docRef, (doc) => {
          arr.push({ id: doc.id, ...doc.data() });
        });
      }

      currentUser.friends && setFriends(arr);
    };

    currentUser && currentUser.friends && getFriends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <Context.Provider
      value={{
        // conversations: friends,
        setCurrentChat,
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
        setFriends: setFriends,
        chats: allChats,
        fetchChats,
        userOnView,
        setUserOnView,
      }}
    >
      {children}
    </Context.Provider>
  );
};
