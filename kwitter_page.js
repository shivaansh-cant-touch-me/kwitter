// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDqDEmPjAhFjsXkN5zwMLKRfh5bwH8sGVQ",
      authDomain: "kwitter-6153c.firebaseapp.com",
      databaseURL: "https://kwitter-6153c-default-rtdb.firebaseio.com",
      projectId: "kwitter-6153c",
      storageBucket: "kwitter-6153c.appspot.com",
      messagingSenderId: "120006334299",
      appId: "1:120006334299:web:5a17c46768c3fa0d11ec7e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            likes: 0
      });
      document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
