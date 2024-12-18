import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase.init";
import AuthContext from "./AuthContext";

const googleProvider = new GoogleAuthProvider();
 const AuthProvaider = ({ children }) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)


const createUser = (email,passward) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,passward)
}
const singInUser = (email,passward)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,passward)
}
const singOutUser = () => {
    setLoading(true)
    return signOut(auth)
}
const signInWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider )
}



useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        console.log('state capture');
        setLoading(false)
    })
    return () => {
        unsubscribe();
    }
},[])  



    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        singOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;