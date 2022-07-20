// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
// Other libraries might need to also be prefixed with "compat":
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBUmoCV5yKKwrA2JOFQ8cWsZHWeoJM5BFs",
  authDomain: "clone-d8f14.firebaseapp.com",
  projectId: "clone-d8f14",
  storageBucket: "clone-d8f14.appspot.com",
  messagingSenderId: "53798891752",
  appId: "1:53798891752:web:42ae97159379797f97195d",
  measurementId: "G-FM1FZKWNKB"
};;

  const firebaseApp = firebaseApp.initializeApp(firebaseConfig);
  
  const db= firebase.firestore();
  const auth=firebase.auth();


  export{db,auth };