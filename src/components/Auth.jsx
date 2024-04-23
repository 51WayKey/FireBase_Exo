import React from "react";
// import firebase from "firebase/compat/app";
import 'firebase/auth';
import { FacebookAuthProvider, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
import { authentification, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


function Auth ( {closeModal} ) {
    const navigate = useNavigate();
    
    const handleLoginSuccess = (user)=> {
        const { uid, displayName, email } = user;
        const userRef = doc(db, 'users', uid)
        const userData = { displayName, email }
        setDoc(userRef, userData)
            .then(() => {
                console.log("user enregistré dans Firestore");
                closeModal();
                navigate('/account');
            })
            .catch((err) => {
                console.log(err.message)
            });
    }

    const handleLoginFacebook = ()=> {
        const providerfb = new FacebookAuthProvider();
        signInWithPopup(authentification, providerfb)
        .then((UserCredentialImpl)=> {
            console.log("Info Users :", UserCredentialImpl )
            handleLoginSuccess(UserCredentialImpl.user)
        })
        .catch((err) =>{
         console.log(err.message)})

    }

    const handleLoginTwitter = ()=> {
        const providerX = new TwitterAuthProvider();
        signInWithPopup(authentification, providerX)
        .then((UserCredentialImpl)=> {
            console.log("Info Users :", UserCredentialImpl )
            handleLoginSuccess(UserCredentialImpl.user)
        })
        .catch((err) =>{
         console.log(err.message)})

    }

    const handleLoginGoogle = ()=> {
        const providerGoogle = new GoogleAuthProvider();
        signInWithPopup(authentification, providerGoogle)
        .then((UserCredentialImpl)=> {
            console.log("Info Users :", UserCredentialImpl )
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









