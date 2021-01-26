import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCbaoSToAU0a0lQkSO7KqEJEqTN_op99OQ",
    authDomain: "quiz-fc5e9.firebaseapp.com",
    databaseURL: "https://quiz-fc5e9.firebaseio.com",
    projectId: "quiz-fc5e9",
    storageBucket: "quiz-fc5e9.appspot.com",
    messagingSenderId: "1082087056850",
    appId: "1:1082087056850:web:9cdf0a84d71fef1cf9540b"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef =firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);

        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;