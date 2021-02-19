var firebaseConfig = {
    apiKey: "AIzaSyAXWTOwjExc0BlOx-0Sb5Hdejx2QzrkLis",
    authDomain: "kwitter-417f8.firebaseapp.com",
    databaseURL: "https://kwitter-417f8-default-rtdb.firebaseio.com",
    projectId: "kwitter-417f8",
    storageBucket: "kwitter-417f8.appspot.com",
    messagingSenderId: "742706274017",
    appId: "1:742706274017:web:799d2a5b886c88bcf821a0",
    measurementId: "G-YH4022V19X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function AddUser(){
    username = document.getElementById("UserName").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding user"
    });
}