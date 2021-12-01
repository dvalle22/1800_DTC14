/*********************************************/
/* Display user's current settings */
/*********************************************/
function populateSettings() {
   firebase.auth().onAuthStateChanged((user) => {
      // Check if user is signed in:
      if (user) {
         //currentUser = db.collection("users").doc(user.uid);
         //currentUser is a global variable, declared in my_script.js

         //get the document for current user
         currentUser.get().then((userDoc) => {
            //get the settings data of the user
            var userVolume = userDoc.data().volume;
            var userFontOption = userDoc.data().fontoption;

            //display the settings data of the user
            if (userVolume != null) {
               document.getElementById("volume_input").value = userVolume;
               document.getElementById("volume_number").innerHTML =
                  userVolume + "%";
            }
            if (userFontOption != null) {
               document.getElementById("fontsize_input").value = userFontOption;
            }
         });
      } else {
         // No user is signed in.
         console.log("No user is signed in");

         // display the volume percentage next to the slider if user hasn't changed any settings or not logged in
         document.getElementById("volume_input").oninput = function () {
            document.getElementById("volume_number").innerHTML =
               document.getElementById("volume_input").value + "%";
         };
      }
   });
}
populateSettings();

/*********************************************/
/* Save user's new settings */
/*********************************************/
function saveUserSettings() {
   //grab values from the form that user inserted in each field
   userVolume = document.getElementById("volume_input").value;
   userFontOption = document.getElementById("fontsize_input").value;

   //update the values to FireStore
   currentUser
      .update({
         volume: userVolume,
         fontoption: userFontOption,
      })
      .then(() => {
         console.log("Document successfully updated!");
      });

   //change button's display to notify that the changes have been "Saved"
   let button_html_unsaved = "Save";
   let button_html_saved = "SAVED &#10003";
   document.getElementById("settings_save_button").innerHTML =
      button_html_saved;
}
