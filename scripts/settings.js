populateSettings();

// display the volume percentage next to the slider if user hasn't changed any settings or not logged in
document.getElementById("volume_input").oninput = function () {
   document.getElementById("volume_number").innerHTML =
      document.getElementById("volume_input").value + "%";
};

var currentUser;

function populateSettings() {
   firebase.auth().onAuthStateChanged((user) => {
      // Check if user is signed in:
      if (user) {
         // go to the correct user document by referencing to the user uid
         currentUser = db.collection("users").doc(user.uid);
         //get the document for current user
         currentUser.get().then((userDoc) => {
            //get the settings data of the user
            var userVolume = userDoc.data().volume;
            var userFontOption = userDoc.data().fontoption;

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
      }
   });
}

function saveUserSettings() {
   //grab values from the form that user inserted in each field:
   userVolume = document.getElementById("volume_input").value;
   userFontOption = document.getElementById("fontsize_input").value;

   currentUser
      .update({
         volume: userVolume,
         fontoption: userFontOption,
      })
      .then(() => {
         console.log("Document successfully updated!");
      });

   let button_html_unsaved = "Save";
   let button_html_saved = "SAVED &#10003";
   document.getElementById("settings_save_button").innerHTML =
      button_html_saved;
}
