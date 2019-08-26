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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;