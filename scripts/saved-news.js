/*********************************************/
/* Use dynamic cards to display all saved news */
/*********************************************/
function displayCards(collection) {
   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         //access the card template
         let CardTemplate = document.getElementById("CardTemplate");

         //go to the corresponding collection, which is "saved_news" in this specific case
         db.collection("users/" + user.uid + "/" + collection)
            .get()
            .then((snap) => {
               //iterate through each doc
               snap.forEach((doc) => {
                  var article = db.collection("articles").doc(doc.id);

                  //create a new card
                  let newcard = CardTemplate.cloneNode(true);

                  article.get().then((doc) => {
                     if (doc.exists) {
                        //populate information and styling to the card
                        newcard.id = "preview";

                        newcard.querySelector(".card-title").innerHTML =
                           doc.data().title;

                        newcard.querySelector(".card-thumbnail").src =
                           doc.data().thumbnail;
                        newcard.querySelector(".card-thumbnail").style.width =
                           "80%";

                        //create a link to sample-article to display the news
                        newcard.querySelector(".card-href").innerHTML =
                           "Go to article";
                        newcard.querySelector(".card-href").href =
                           "sample-article.html";
                        newcard.querySelector(".card-href").onclick =
                           function () {
                              localStorage.setItem("newsID", doc.id);
                           };
                     }
                  });

                  //add the new card to the html
                  document
                     .getElementById("saved_news_container")
                     .appendChild(newcard);
               });
            });
      }
   });
}
displayCards("saved_news");
