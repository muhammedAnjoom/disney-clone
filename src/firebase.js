
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPet0OXbrPOxU8mD6XqxhfxiSW4e32-uw",
  authDomain: "disneyplus-58ffa.firebaseapp.com",
  projectId: "disneyplus-58ffa",
  storageBucket: "disneyplus-58ffa.appspot.com",
  messagingSenderId: "477270351206",
  appId: "1:477270351206:web:a84028712ab458d7c67ca7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;