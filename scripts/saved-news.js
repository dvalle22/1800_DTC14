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
                  var article = db.collection("articles").doc(doc.id);

                  let newcard = CardTemplate.cloneNode(true);

                  article.get().then((doc) => {
                     if (doc.exists) {
                        newcard.id = "preview";
                        newcard.querySelector(".card-title").innerHTML =
                           doc.data().title;
                        newcard.querySelector(".card-thumbnail").src =
                           doc.data().thumbnail;
                        newcard.querySelector(".card-thumbnail").style.width =
                           "80%";
                        newcard.querySelector(".card-href").innerHTML =
                           "Go to article";
                        newcard.querySelector(".card-href").href =
                           "sample-article.html";
                     }
                  });

                  newcard.querySelector(".card-href").onclick = function () {
                     localStorage.setItem("newsID", doc.id);
                  };

                  document
                     .getElementById("saved_news_container")
                     .appendChild(newcard);
               });
            });
      }
   });
}
displayCards("saved_news");
