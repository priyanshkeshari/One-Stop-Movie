// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
// import {  getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";


// setting up firebase with website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABXG2VmTw80woZUq6TQD8Xc84fiYrpIF8",
  authDomain: "auth-form-de806.firebaseapp.com",
  projectId: "auth-form-de806",
  storageBucket: "auth-form-de806.appspot.com",
  messagingSenderId: "900423098287",
  appId: "1:900423098287:web:cde7d1384a0c2886f7d95a"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();




// Sign up function
const signup = () =>{
    const email =  document.getElementById("username").value;
    const password =  document.getElementById("password").value;
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    //document.write("You are Signed Up");
    window.location.href="Movie-website-2.html";
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    alert(error.message)
    // ..
  });
}

//Sign In function
const signIn =() =>{
  const email =  document.getElementById("username").value;
  const password =  document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    //document.write("You are Signed In");
    window.location.href="Movie-website-2.html";
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    alert(error.message)
  });
}


// logout function
const logout = () => {
  auth.signOut()
      .then(() => window.location.href = 'logout.html')
      .catch((error) => alert(error.message));
      console.log("logged Out")
};


// const checkAuthState = () => {
//   auth.onAuthStateChanged((user) => {
//       if (user) {
    
//       } else {
          
//           window.location.href = 'logout.html';
//       }
//   });
// };
// checkAuthState();