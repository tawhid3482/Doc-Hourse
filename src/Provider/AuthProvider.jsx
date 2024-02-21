
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import { Auth } from "../Firebase/Firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading,setLoading]=useState(true)
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(Auth);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(Auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(Auth, googleProvider);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logoutUser,
    updateUserProfile,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
