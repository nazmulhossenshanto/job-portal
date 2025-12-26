import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase.init';
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [user, setUser]= useState(null)
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = ()=> {
        setLoading(true)
        return signOut(auth)
    }
    const signInWithGoogle = ()=> {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
            console.log('user in the auth state change', currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
        jobs,
        setJobs
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;