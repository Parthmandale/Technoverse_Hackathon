const firebaseConfig = {
  apiKey: "AIzaSyAGNTqvDKLsbmOVKPcNCeyc1uQqmprimPc",
  authDomain: "login-page-380fe.firebaseapp.com",
  projectId: "login-page-380fe",
  storageBucket: "login-page-380fe.appspot.com",
  messagingSenderId: "179033739804",
  appId: "1:179033739804:web:f4cfc7998e7682900f85d9"
};

// Giving functionality to the website
firebase.initializeApp(firebaseConfig);
// const auth = getAuth();
// console.log(app);



// Initialize Firebase
document.getElementById("register").addEventListener("click", function () {
  var name = document.getElementById("suname").value;
  var email = document.getElementById("suemail").value;
  var password = document.getElementById("supassword").value;
  //For new registration
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user); login
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
document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("siemail").value;
  var password = document.getElementById("sipassword").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email + " Login successfully!!!");
      // document.getElementById('logout').style.display = 'block';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});