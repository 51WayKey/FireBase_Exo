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
    // const userRef = doc(db, 'users');
    // const userData = 
    // async function createDocument () {
       
    // }


    const handleLoginFacebook = ()=> {
        const providerfb = new FacebookAuthProvider();
        signInWithPopup(authentification, providerfb)
        .then((re)=> {
            console.log("Info Users :", re )
            closeModal();
            navigate('/account')
        })
        .catch((err) =>{
         console.log(err.message)})

    }

    const handleLoginTwitter = ()=> {
        const providerX = new TwitterAuthProvider();
        signInWithPopup(authentification, providerX)
        .then((re)=> {
            console.log("Info Users :", re )
            closeModal();
            navigate('/account')

        })
        .catch((err) =>{
         console.log(err.message)})

    }

    const handleLoginGoogle = ()=> {
        const providerGoogle = new GoogleAuthProvider();
        signInWithPopup(authentification, providerGoogle)
        .then((re)=> {
            console.log("Info Users :", re )
            closeModal();
            navigate('/account')

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









