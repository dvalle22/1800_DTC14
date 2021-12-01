/*********************************************/
/* Change font size */
/*********************************************/
changeFontSize = function () {
   firebase.auth().onAuthStateChanged((user) => {
      // Check if user is signed in:
      if (user) {
         //currentUser = db.collection("users").doc(user.uid);
         //currentUser is a global variable, declared in my_script.js

         //get the document for current user
         currentUser.get().then((userDoc) => {
            //get the settings data of the user
            var userFontOption = userDoc.data().fontoption;
            if (userFontOption != null) {
               if (userFontOption == "default") {
                  $("#content").css({ "font-size": "100%" });
               } else if (userFontOption == "large") {
                  $("#content").css({ "font-size": "140%" });
               } else if (userFontOption == "larger") {
                  $("#content").css({ "font-size": "180%" });
               } else if (userFontOption == "largest") {
                  $("#content").css({ "font-size": "220%" });
               }
            }
         });
      } else {
         // No user is signed in.
         console.log("No user is signed in");
      }
   });
};
jQuery(document).ready(changeFontSize);
