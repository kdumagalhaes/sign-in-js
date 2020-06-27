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

  const logoutBtn = document.getElementById('logoutBtn')


logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(function(){
        window.location = 'index.html'
    })

    })

