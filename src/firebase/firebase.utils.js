import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAPm6Habbw4WAd5xf-igBRcSAXkOoELkpI",
    authDomain: "crwn-shopdb.firebaseapp.com",
    databaseURL: "https://crwn-shopdb.firebaseio.com",
    projectId: "crwn-shopdb",
    storageBucket: "crwn-shopdb.appspot.com",
    messagingSenderId: "620605524875",
    appId: "1:620605524875:web:c5696d4ba348b33b1c7d8e",
    measurementId: "G-3333D302M2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;