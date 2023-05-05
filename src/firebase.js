import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCYvJrJ7lZepvjpZOkQXt0hJWpBFQgcJ0A",
    authDomain: "whatsapp-clone-402ff.firebaseapp.com",
    projectId: "whatsapp-clone-402ff",
    storageBucket: "whatsapp-clone-402ff.appspot.com",
    messagingSenderId: "636759176230",
    appId: "1:636759176230:web:62fb1e81a40ab81dc8e2e7"
};
// Initialize Firebase
//this special line of code connects everything
const firebaseapp = firebase.initializeApp(firebaseConfig);

// this is for database connection
const db = firebaseapp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
