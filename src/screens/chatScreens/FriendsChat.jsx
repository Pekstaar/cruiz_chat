import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Chats, Media, Users } from "../../components/chat";
import { db } from "../../FirebaseConfig";
import { Context } from "../../Store";

export const FriendsChat = () => {
  const { currentUser } = useContext(Context);

  const [currentUserDetails, setCurrentUserDetails] = useState();
  const [friends, setFriends] = useState([]);
  const [userOnFocus, setUserOnFocus] = useState({});

  // fetch currentUser details
  useEffect(() => {
    if (currentUser) {
      const getDetails = () => {
        // fetch current user details from users
        onSnapshot(doc(db, "users", currentUser.uid), (docSnap) => {
          if (docSnap) {
            setCurrentUserDetails({ ...docSnap.data() });
          }
        });
      };

      getDetails();
    }
  }, [currentUser]);

  // fetch friends details
  useEffect(() => {
    if (
      currentUserDetails &&
      currentUserDetails.friends &&
      currentUserDetails.friends.length !== 0
    ) {
      const usersRef = collection(db, "users");
      // create query object
      const q = query(
        usersRef,
        where("uid", "in", [...currentUserDetails.friends])
      );
      // execute query
      const unsub = onSnapshot(q, (querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        setFriends(users);
      });
      return () => unsub();
    }
  }, [currentUserDetails]);

  return (
    <div className=" flex  flex-grow">
      {/* list of users */}
      <Users
        friends={friends}
        currentUser={currentUserDetails}
        setFriends={setFriends}
        userOnFocus={userOnFocus}
        setUserOnFocus={setUserOnFocus}
      />
      {/* chat panel */}
      <Chats currentUser={currentUserDetails} userOnFocus={userOnFocus} />
      {/* Resource media with group or friend */}
      <Media userOnFocus={userOnFocus} />
    </div>
  );
};
