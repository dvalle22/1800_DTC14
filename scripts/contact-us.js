/*********************************************/
/* Send enquiry in Contact Us to the FireStore */
/*********************************************/
function submit_enquiry() {
   //get user's input information
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let message = document.getElementById("message").value;

   //add user's enquiry to the FireStore
   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         //currentUser = db.collection("users").doc(user.uid);
         //currentUser is a global variable, declared in my_script.js

         var userID = user.uid;

         currentUser.get().then((userDoc) => {
            db.collection("enquiries").add({
               UserID: userID,
               Name: name,
               Email: email,
               Message: message,
            });
         });
      } else {
         console.log("No user is signed in.");
      }
   });
}
