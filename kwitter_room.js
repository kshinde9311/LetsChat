
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC50folU6hRR7hbzlRGJvFqykmRgVBMil4",
      authDomain: "kwitter-70376.firebaseapp.com",
      databaseURL: "https://kwitter-70376-default-rtdb.firebaseio.com",
      projectId: "kwitter-70376",
      storageBucket: "kwitter-70376.appspot.com",
      messagingSenderId: "164704674601",
      appId: "1:164704674601:web:298bb3b0d9ca0b48fa0d38"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
