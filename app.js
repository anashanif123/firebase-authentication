// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBOW1nXaDERpTZC9aFGB2xJyMST6nBKt68",
    authDomain: "authentication-app-91ba5.firebaseapp.com",
    projectId: "authentication-app-91ba5",
    storageBucket: "authentication-app-91ba5.appspot.com",
    messagingSenderId: "327932150109",
    appId: "1:327932150109:web:f3e8619df46fda06fda8b4",
    measurementId: "G-VVGH2N7RZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth(app);
console.log(auth);

var email_signUp = document.getElementById("email")
var password_signUp = document.getElementById("password")
var Btn_signUp = document.getElementById("signUp_btn");
var signUp_container = document.getElementById("signUp_container")

var emailLogin = document.getElementById("email_Login")
var passwordLogin = document.getElementById("password_Login")
var LoginBtn = document.getElementById("Login_btn")
var Logout_container = document.getElementById("Logout_container")
var Logout_btn = document.getElementById("logout")
var user_email = document.getElementById("user_Email")

onAuthStateChanged(auth, (user) => {
    if (user) {
        signUp_container.style.display = "none";
        Logout_container.style.display = "block";
        user_email.innerText = user.email;
        const uid = user.uid;

    } else {
        signUp_container.style.display = "block";
        Logout_container.style.display = "none";
    }
});
Btn_signUp.addEventListener("click",()=>{
    createUserWithEmailAndPassword(auth, email_signUp.value, password_signUp.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

LoginBtn.addEventListener("click",()=>{
    signInWithEmailAndPassword(auth,emailLogin.value, passwordLogin.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

Logout_btn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
});


