  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCoa2hfSBJqaDSw93pJ-qdbCigYTvqvb8E",
    authDomain: "landing-signup.firebaseapp.com",
    databaseURL: "https://landing-signup.firebaseio.com",
    projectId: "landing-signup",
    storageBucket: "landing-signup.appspot.com",
    messagingSenderId: "179098341395",
    appId: "1:179098341395:web:5d98c20665a19c3bb6afe6",
    measurementId: "G-M1S2FKHH19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth()


  const inputEmail = document.getElementById('inputEmail')
  const inputPassword = document.getElementById('inputPassword')
  const signUpForm = document.getElementById('signUpForm')


  signUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(inputEmail.value, inputPassword.value).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(`Error: ${errorMessage}`)

    }) 
  })

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.location = 'thx.html'
    } else {
    }
  });

