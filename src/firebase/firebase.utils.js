import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAec7yXq2GW-kOTPVclTrXNQAaruOIO0Xg",
    authDomain: "ecommerce-db-781a8.firebaseapp.com",
    databaseURL: "https://ecommerce-db-781a8.firebaseio.com",
    projectId: "ecommerce-db-781a8",
    storageBucket: "",
    messagingSenderId: "219340181518",
    appId: "1:219340181518:web:b5b314913ddb915b"
  }

  export const createUserProfileDocument = async (userAuth, additonalData) => {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additonalData
        })
      } catch (error) {
          console.log('error creating user', error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;