import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
//Components
import Message from './Message';

const Channel = ({user = null, db = null}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (db){
            const unsubscribe = db
            .collection('messages')
            .orderBy('createdAt')
            .limit(100)
            .onSnapshot((querySnapshot) => {
                //Get all documents from collection with IDs
                const data = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                //Update state
                setMessages(data);
            })
            return unsubscribe;
        }
    }, [db])

    return (
        <ul>
            {messages.map((message) => {
                console.log(messages)
                return (
                <li key={message.id}>
                    <Message {...message}/>
                </li>
                )
            })}
        </ul>
    );
};

export default Channel;