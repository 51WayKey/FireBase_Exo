import React from "react";
// import firebase from "firebase/compat/app";
import 'firebase/auth';
import { FacebookAuthProvider, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { authentification, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// import { collection } from "firebase/firestore";


function Auth ( {closeModal} ) {
    const navigate = useNavigate();

    const handleLoginSuccess = (user) => {
        const {displayName, email, uid } = user
        console.log(user);
        const userRef = doc(db, 'users', uid);
        const userData = {displayName, email}
        setDoc(userRef, userData)
        .then((UserCredentialImpl)=> {
            console.log("Info Users :", UserCredentialImpl )
            closeModal();
            navigate('/account')
        })
        .catch((err) =>{
         console.log(err.message)})
        
   


    const handleLoginFacebook = ()=> {
        const providerfb = new FacebookAuthProvider();
        signInWithPopup(authentification, providerfb)
        .then((UserCredentialImpl)=> {
            handleLoginSuccess(UserCredentialImpl.user)
        })
        .catch((err) =>{
         console.log(err.message)})

    }

    const handleLoginTwitter = ()=> {
        const providerX = new TwitterAuthProvider();
        signInWithPopup(authentification, providerX)
        .then((UserCredentialImpl)=> {
            handleLoginSuccess(UserCredentialImpl.user)
            

        })
        .catch((err) =>{
         console.log(err.message)})

    }

    const handleLoginGoogle = ()=> {
        const providerGoogle = new GoogleAuthProvider();
        signInWithPopup(authentification, providerGoogle)
        .then((UserCredentialImpl)=> {
            handleLoginSuccess(UserCredentialImpl.user)

        })
        .catch((err) =>{
         console.log(err.message)})

    }
    

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLoginFacebook}> Facebook </button>
            <button onClick={handleLoginTwitter}> Twitter </button>
            <button onClick={handleLoginGoogle}> Google </button>
        </div>
    )


}

export default Auth;









