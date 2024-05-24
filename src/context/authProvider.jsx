import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  const createUser=(email,password)=>{
    setLoading(true);
    // console.log(email, password);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const singIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut=()=>{
    setLoading(true);
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("current User",currentUser);
        setLoading(true);
        const uid = currentUser.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    
    return ()=>{
      return unsubscribe();
    }
  },[])
  
  const authInfo = { user, loading, setUser, setLoading,createUser,singIn,logOut };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
