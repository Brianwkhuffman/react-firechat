import React, {useState, useEffect} from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//Components
import Button from './components/Button'
import Channel from './components/Channel'
import UserInput from './components/UserInput'

firebase.initializeApp({
    apiKey: "AIzaSyB7wUeA1RsnI4Hi_bGV5c39MZuFAXVUpL0",
    authDomain: "react-firechat-1bb49.firebaseapp.com",
    projectId: "react-firechat-1bb49",
    storageBucket: "react-firechat-1bb49.appspot.com",
    messagingSenderId: "762191356819",
    appId: "1:762191356819:web:5e91bc16d4b6414b96fe66"
});

const auth = firebase.auth();
const db = firebase.firestore();

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);
  
useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user){
        setUser(user);
      }else{
        setUser(null);
      }
      if (initializing){
        setInitializing(false);
      }
    });
    //Clean up subscription
    return unsubscribe;
  }, [db])

  const signInWithGoogle = async () => {
    //Get Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    //Set language to the default browser preference
    auth.useDeviceLanguage();
    //Start sign in process
    try{
      await auth.signInWithPopup(provider);
    } catch(error){
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    }catch (error){
      console.log(error.message);
    }
  };

  if (initializing) return "Loading..."

  return (
    <div>
      {user ? (
        <>
        <Button onClick={signOut}>Sign out</Button>
        <Channel user={user} db={db}/>
        <UserInput user={user} db={db}/>
        </>
      ): (
        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
      )}
    </div>
  );
}

export default App;
