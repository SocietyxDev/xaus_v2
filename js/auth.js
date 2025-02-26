import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Signup Successful");
            window.location.href = "index.html";
        })
        .catch(error => alert(error.message));
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login Successful");
            window.location.href = "index.html";
        })
        .catch(error => alert(error.message));
}

function logout() {
    signOut(auth)
        .then(() => {
            alert("Logged Out");
            window.location.href = "login.html";
        })
        .catch(error => alert(error.message));
}
