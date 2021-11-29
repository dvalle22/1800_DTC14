function insertName() {
   firebase.auth().onAuthStateChanged((user) => {
      // Check if user is signed in:
      if (user) {
         //currentUser = db.collection("users").doc(user.uid);
         //currentUser is a global varible, declared in my_script.js

         //go to the correct user document by referencing to the user uid
         //get the document for current user.
         currentUser.get().then((userDoc) => {
            var user_Name = userDoc.data().name;
            console.log(user_Name);
            //method #1:  insert with html only
            document.getElementById("name-goes-here").innerText = user_Name; //using javascript
            //method #2:  insert using jquery
            //$("#name-goes-here").text(user_Name);                         //using jquery
         });
      } else {
         // No user is signed in.
      }
   });
}
insertName();

function populateInfo() {
   firebase.auth().onAuthStateChanged((user) => {
      // Check if user is signed in:
      if (user) {
         //get the document for current user.
         currentUser.get().then((userDoc) => {
            //get the data fields of the user
            var username = userDoc.data().name;
            // console.log(userName);
            var useremail = userDoc.data().email;
            var userphone = userDoc.data().phone;
            var f_name = userDoc.data().f_name;
            var l_name = userDoc.data().l_name;

            //if the data fields are not empty, then write them in to the form.
            if (username != null) {
               document.getElementById("username").value = username;
            }
            if (useremail != null) {
               document.getElementById("email").value = useremail;
            }
            if (userphone != null) {
               document.getElementById("phone").value = userphone;
            }
            if (f_name != null) {
               document.getElementById("f_name").value = f_name;
            }
            if (l_name != null) {
               document.getElementById("l_name").value = l_name;
            }
         });
      } else {
         // No user is signed in.
         console.log("No user is signed in");
      }
   });
}

//call the function to run it
populateInfo();

function editUserInfo() {
   document.getElementById("personalInfoFields").disabled = false;
}

function saveUserInfo() {
   username = document.getElementById("username").value;
   email = document.getElementById("email").value;
   phone = document.getElementById("phone").value;
   f_name = document.getElementById("f_name").value;
   l_name = document.getElementById("l_name").value;

   // console.log("values are:", name, school, city)
   currentUser.update({
      first_name: f_name,
      last_name: l_name,
      name: username,
      email: email,
      phone: phone,
   });
   document.getElementById("personalInfoFields").disabled = true;
}
