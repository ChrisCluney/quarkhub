// import React from "react";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const handleDelete = async (id) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // No user is signed in.
  }

  const docRef = doc(db, `${user.uid}`, id);
  await deleteDoc(docRef);

  console.log(id);
  return id;
};

export default handleDelete;
