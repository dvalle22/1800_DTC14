function submit_enquiry() {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let message = document.getElementById("message").value;

   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         var currentUser = db.collection("users").doc(user.uid);
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
