import firebase from 'firebase';


// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAJoG73FkUFo0gS-fixhxf17ZdipPsQDKI",
  authDomain: "teste-63577.firebaseapp.com",
  databaseURL: "https://teste-63577.firebaseio.com",
  projectId: "teste-63577",
  storageBucket: "gs://teste-63577.appspot.com",
  messagingSenderId: "391510446991",
  appId: "1:391510446991:web:cb96b3cc557f2c5b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;