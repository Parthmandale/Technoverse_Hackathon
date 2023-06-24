
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGNTqvDKLsbmOVKPcNCeyc1uQqmprimPc",
  authDomain: "login-page-380fe.firebaseapp.com",
  projectId: "login-page-380fe",
  storageBucket: "login-page-380fe.appspot.com",
  messagingSenderId: "179033739804",
  appId: "1:179033739804:web:f4cfc7998e7682900f85d9"
};

// Giving functionality to the website
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(app);



// Initialize Firebase
document.getElementById("register").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var email =  document.getElementById("email").value;
  var password = document.getElementById("password").value;
  //For new registration
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("Registration successfully!!");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
    alert(error);
  });		  		  
});
//----- End

//----- Login code start	  
document.getElementById("login").addEventListener("click", function() {
  var email =  document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert(user.email+" Login successfully!!!");
    document.getElementById('logout').style.display = 'block';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(errorMessage);
  });		  		  
});

// //----- End

// //----- Logout code start	  
// /*
// document.getElementById("logout").addEventListener("click", function() {
//   signOut(auth).then(() => {
//       // Sign-out successful.
//       console.log('Sign-out successful.');
//       alert('Sign-out successful.');
//       document.getElementById('logout').style.display = 'none';
//     }).catch((error) => {
//       // An error happened.
//       console.log('An error happened.');
//     });		  		  
// });
// //----- End*/

