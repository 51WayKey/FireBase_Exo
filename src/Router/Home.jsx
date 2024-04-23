import React from "react"
import ReactModal from "react-modal"
import Auth from "../components/Auth"
import { useState } from "react"


function Home(){
    const [modal, setModal]= useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    return (
        <div>
            <button onClick={openModal} >Se Connecter</button>
            <ReactModal isOpen={modal} onRequestClose={closeModal}>
                <button onClick={closeModal}>Close</button>
                <Auth closeModal={closeModal}/>
            </ReactModal>
        </div>
    )

}

export default Home

