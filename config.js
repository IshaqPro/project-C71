import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB-NGMPWxwu24ln0d1A6KSXMzNC7ypeN3A",
    authDomain: "e-ride-project-e9356.firebaseapp.com",
    projectId: "e-ride-project-e9356",
    storageBucket: "e-ride-project-e9356.appspot.com",
    messagingSenderId: "182837695522",
    appId: "1:182837695522:web:97a5efd2afb9e89c16e67b"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
