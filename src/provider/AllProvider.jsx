import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
("react-router-dom");
import app from "../firebase/firebase.config";
export const AllContext = createContext();

//-----------------------------------------
const AllProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [loggedUser, setLoggedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resetMail , setResetMail] = useState("");

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  // console.log(onAuthStateChanged)
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoggedUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logUserOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updProfile = (updData) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updData);
  };
  const passReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const contextToPass = {
    registerUser,
    loginUser,
    googleSignIn,
    loggedUser,
    logUserOut,
    updProfile,
    passReset,
    loading,
    setResetMail,
    resetMail,
  };
  //-----------------------------------------
  return (
    <AllContext.Provider value={contextToPass}>{children}</AllContext.Provider>
  );
};

export default AllProvider;
