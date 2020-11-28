import firebase from 'firebase/app';
import 'firebase/firestore';  //database
import 'firebase/auth';  //auth
// ----------------------------------------------
const config = {
  apiKey: "AIzaSyCnT3eNo626QZTURJS0NmN3gnC-kZPGdPE",
  authDomain: "alish-7e682.firebaseapp.com",
  databaseURL: "https://alish-7e682.firebaseio.com",
  projectId: "alish-7e682",
  storageBucket: "alish-7e682.appspot.com",
  messagingSenderId: "812991860178",
  appId: "1:812991860178:web:f1ed9e46849f79e6548c0b",
  measurementId: "G-EZJ80J2J6B"
};  
firebase.initializeApp(config);
// ----------------------------------------------

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
// ------------------------------------------------------------
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const provider_two = new firebase.auth.TwitterAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
provider_two.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithTwitter = () => auth.signInWithPopup(provider_two);

export default firebase;
