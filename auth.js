function signup() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User signed up successfully!");
        })
        .catch((error) => {
            console.error("Error signing up:", error);
        });
}

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("User logged in successfully!");
        })
        .catch((error) => {
            console.error("Error logging in:", error);
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        console.log("User signed out successfully!");
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User is signed in.");
        alert("user signed in")
    } else {
        console.log("No user is signed in.");
        alert("user signed in")
    }
});