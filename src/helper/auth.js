import {
  getAuth,
  signInWithEmailAndPassword,
//   onAuthStateChanged,
} from "firebase/auth";
import firebase from "../firebase";

const auth = getAuth(firebase);

export const signinAdmin = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
      return user;
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      return error;
    });
};

// export const checkSignin = () => {
//   return onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       return true;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//       return false;
//     }
//   });
// };
