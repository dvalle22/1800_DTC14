function displayCards(collection) {
   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         let CardTemplate = document.getElementById("CardTemplate");
         db.collection("users/" + user.uid + "/" + collection)
            .get()
            .then((snap) => {
               var i = 1;
               snap.forEach((doc) => {
                  //iterate thru each doc
                  var title = doc.data().name;
                  console.log(title);
                  var theURL = doc.data().url;
                  let newcard = CardTemplate.cloneNode(true);

                  newcard.querySelector(".card-title").innerHTML = title;
                  newcard.querySelector(".card-href").innerHTML = "Go to skill";
                  newcard.querySelector(".card-href").href = "./" + theURL;

                  document
                     .getElementById("saved_skills_container")
                     .appendChild(newcard);
               });
            });
      }
   });
}
displayCards("saved_skills");
