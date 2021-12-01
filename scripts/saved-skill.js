/*********************************************/
/* Use dynamic cards to display all saved skills. */
/*********************************************/
function displayCards(collection) {
   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         //access the card template
         let CardTemplate = document.getElementById("CardTemplate");

         //go to the corresponding collection, which is "saved_skills" in this specific case
         db.collection("users/" + user.uid + "/" + collection)
            .get()
            .then((snap) => {
               //iterate through each doc
               snap.forEach((doc) => {
                  var title = doc.data().name;
                  var theURL = doc.data().url;

                  //create a new card
                  let newcard = CardTemplate.cloneNode(true);

                  //populate information to the card
                  newcard.querySelector(".card-title").innerHTML = title;
                  newcard.querySelector(".card-href").innerHTML = "Go to skill";
                  newcard.querySelector(".card-href").href = "./" + theURL;

                  //add the new card to the html
                  document
                     .getElementById("saved_skills_container")
                     .appendChild(newcard);
               });
            });
      }
   });
}
displayCards("saved_skills");
