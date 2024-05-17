
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
}

function showSignup() {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
}

const loginBtn = document.getElementById('loginBtn')
const signupBtn = document.getElementById('signupBtn')

loginBtn.addEventListener("click", showLogin)
signupBtn.addEventListener("click", showSignup)

console.log("this is  login page");

//Inputs 
const email = document.getElementById("email");
const password = document.getElementById("password");

//Submit 
const submit = document.getElementById("submit");

submit.addEventListener("click", )

export const registerUser = (event)=>{
    event.preventDefault();
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    alert("user registering")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
// [END auth_signup_password_modular]
}