import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyBJcWch_hUxABgGEtoV7o2fIoMELZLRkXg",
    authDomain: "listacontato-3cc5a.firebaseapp.com",
    databaseURL: "https://listacontato-3cc5a.firebaseio.com",
    projectId: "listacontato-3cc5a",
    storageBucket: "listacontato-3cc5a.appspot.com",
    messagingSenderId: "35451341013",
    appId: "1:35451341013:web:9e0162359e15e24b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase