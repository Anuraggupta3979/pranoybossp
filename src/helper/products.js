import { db } from "../firebase";
// Add a second document with a generated ID.
import { addDoc, collection } from "firebase/firestore";

export const addProducts = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: data,
      middle: "Mathison",
      last: "Turing",
      born: 1912,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};