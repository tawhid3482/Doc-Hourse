
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setuser(currentUser);
      console.log(currentUser)
    //   if (currentUser) {
    //     const userInfo = { email: currentUser.email };
    //     axiosPublic.post("/jwt", userInfo).then((res) => {
    //       if (res.data.token) {
    //         localStorage.setItem("access-token", res.data.token);
    //         setLoading(false);
    //       }
    //     });
    //   } else {
    //     localStorage.removeItem("access-token");
    //     setLoading(false);

    //   }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

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
