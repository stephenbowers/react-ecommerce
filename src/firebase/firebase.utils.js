import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCyTDZ3jDuhXKEH_ONGCoK8rVT1k5itVG8",
    authDomain: "crwn-db-28d44.firebaseapp.com",
    databaseURL: "https://crwn-db-28d44.firebaseio.com",
    projectId: "crwn-db-28d44",
    storageBucket: "crwn-db-28d44.appspot.com",
    messagingSenderId: "1091228025569",
    appId: "1:1091228025569:web:e04cf7373a32e7bd1d2da0",
    measurementId: "G-CXZ8VFYRYF"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;