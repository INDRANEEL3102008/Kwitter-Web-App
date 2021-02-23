
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDkp9DhgIaYwhsrNQUPv46i28DfjJ07rjc",
      authDomain: "kwitter-faf66.firebaseapp.com",
      databaseURL: "https://kwitter-faf66-default-rtdb.firebaseio.com",
      projectId: "kwitter-faf66",
      storageBucket: "kwitter-faf66.appspot.com",
      messagingSenderId: "563244049033",
      appId: "1:563244049033:web:8fb4b9953b6849bedc5c58"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    function addRoom() {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });
});

}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
