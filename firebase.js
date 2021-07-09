import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD54iA5Y24A8DVVmwYVhC3qLsr0IWcaeT8",
  authDomain: "fb-clone-44f9f.firebaseapp.com",
  projectId: "fb-clone-44f9f",
  storageBucket: "fb-clone-44f9f.appspot.com",
  messagingSenderId: "374289387177",
  appId: "1:374289387177:web:c1b8370bae50ffb59b63b8",
  measurementId: "G-QE51GMSH6H",
};
// initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { db, storage, auth, provider };
