import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyBQ0oN1kZ8zxy6thTIiSEmsUCUxilJQLCQ",
authDomain: "instagram-clone-react-8ed5e.firebaseapp.com",
databaseURL: "https://instagram-clone-react-8ed5e-default-rtdb.firebaseio.com",
projectId: "instagram-clone-react-8ed5e",
storageBucket: "instagram-clone-react-8ed5e.appspot.com",
messagingSenderId: "439127463161",
appId: "1:439127463161:web:bc37f608a3e5690d89be28",
measurementId: "G-S9RC21NLBC"

});

  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};
