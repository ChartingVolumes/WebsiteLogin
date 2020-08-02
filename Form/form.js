        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBYWq3qfIqgIm-tpmVOGL8UrCNYRHo3PGY",
            authDomain: "login-44c94.firebaseapp.com",
            databaseURL: "https://login-44c94.firebaseio.com",
            projectId: "login-44c94",
            storageBucket: "login-44c94.appspot.com",
            messagingSenderId: "907090177948",
            appId: "1:907090177948:web:79a5f9fd1417d5eb07a259"
        };
        // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();

    function signUp() {
        var emailSignUp = document.getElementById("emailSignUp");
        var passwordSignUp = document.getElementById("passwordSignUp");

            const promise = auth.createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value);
            promise.catch(e => alert(e.message));
            alert("Signed Up");
    }

    function facebookSignIn() {
        var provider = new firebase.auth.FacebookAuthProvider();

        // What kind of info you want to access
        provider.addScope('user_birthday');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    function githubSignIn() {
        var provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('repo');
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    function signIn() {
        var emailSignIn = document.getElementById("emailSignIn");
        var passwordSignIn = document.getElementById("emailSignIn");

            const promise = auth.signInWithEmailAndPassword(emailSignIn.value, passwordSignIn.value);
            promise.catch(e => alert(e.message));
            alert("Signed In" + emailSignIn.innerHTML);
    }

    // function signOut() {
    //     auth.signOut;
    //     alert("You've signed out." + email);
    // }