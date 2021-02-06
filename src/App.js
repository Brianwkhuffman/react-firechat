import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyB7wUeA1RsnI4Hi_bGV5c39MZuFAXVUpL0",
    authDomain: "react-firechat-1bb49.firebaseapp.com",
    projectId: "react-firechat-1bb49",
    storageBucket: "react-firechat-1bb49.appspot.com",
    messagingSenderId: "762191356819",
    appId: "1:762191356819:web:5e91bc16d4b6414b96fe66"
});

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
