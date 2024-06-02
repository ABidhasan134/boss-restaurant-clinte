import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged,updateProfile , signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import useAxiousPublic from '../hooks/useAxiousPublic';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublice= useAxiousPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser=(email,password)=>{
    setLoading(true);
    return updateProfile(email, password);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth).then(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
      if(currentUser){
        const userInfo={email: currentUser.email};
        setLoading(false);
        axiosPublice.post("/jwt",userInfo)
        .then((res)=>{
          // console.log(res.data)
          localStorage.setItem("access_token",res.data)
        })
      }
      else{
        localStorage.removeItem("access_token")
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const googleSingIn=()=>{
    setLoading(true);
    return signInWithPopup(auth, provider)
  }

  const authInfo = { user, loading, setUser, setLoading, createUser, signIn, logOut,updateUser,googleSingIn };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
