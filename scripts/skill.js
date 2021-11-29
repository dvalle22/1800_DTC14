save_skill = function () {
   let button_html_saved = "SAVED &#10003";
   let button_html_unsaved = "Save Skill";

   if ($("#save_button_text").html() == button_html_unsaved) {
      $("#save_button_text").html(button_html_saved);
      var currentSkill = db.collection("skills").doc("sample_skill");
      currentSkill
         .get()
         .then((doc) => {
            if (doc.exists) {
               console.log("Document data:", doc.data());
               let skillName = doc.data().name;
               let skillUrl = doc.data().url;

               currentUser.collection("saved_skills").doc("sample_skill").set({
                  name: skillName,
                  url: skillUrl,
               });
            } else {
               // doc.data() will be undefined in this case
               console.log("No such document!");
            }
         })
         .catch((error) => {
            console.log("Error getting document:", error);
         });
   } else {
      $("#save_button_text").html(button_html_unsaved);
   }
};
setup = function () {
   $("#save_button").click(save_skill);
};
jQuery(document).ready(setup);
