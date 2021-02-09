import React, {useState, useEffect } from 'react';
import firebase from 'firebase/app';

const UserInput = ({user = null, db = null}) => {
    const [message, setMessage] = useState('');
    const {uid, displayName, photoURL} = user;


    const handleInputChange = (e) => {
        e.preventDefault()
        setMessage(e.target.value)
    }

    const submitMessage = (e) => {
        e.preventDefault()

        let data = {
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            displayName,
            photoURL,
        }
        if(db){
            db.collection('messages').add(data)
            setMessage('')   
        }
    }

    return(
        <>
        <form onSubmit={submitMessage}>
        <input type="text" value={message} onChange={handleInputChange}/>
        <button type="submit" disabled={!message}>
            Send
        </button>
        </form>
        </>
    )

}

export default UserInput;