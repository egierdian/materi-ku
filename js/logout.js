var config = {
    apiKey: "AIzaSyATPKgucmsvnMfE657NNZhof8Wu18LKqc8",
    authDomain: "materi-ku.firebaseapp.com",
    databaseURL: "https://materi-ku.firebaseio.com",
    projectId: "materi-ku",
    storageBucket: "materi-ku.appspot.com",
    messagingSenderId: "1044309735530",
    appId: "1:1044309735530:web:73a4d9ab118324c179b213",
    measurementId: "G-4LGN1ENH94"
  };
  firebase.initializeApp(config);
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var user = firebase.auth().currentUser;
  
      if(user != null){
        // var email_id = user.email;
        // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      }
  
    } else {
      // No user is signed in.
      console.log("Gagal");
  
      window.location.href = '../index.html';
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  