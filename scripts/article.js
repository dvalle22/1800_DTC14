/*********************************************/
/* Populate news to the template */
/*********************************************/
function displayNews() {
   let newsID = "test_article";

   if (localStorage.getItem("newsID") != null) {
      newsID = localStorage.getItem("newsID");
   }

   let news = db.collection("articles").doc(newsID);

   news.get().then((doc) => {
      if (doc.exists) {
         document.getElementById("title").innerHTML = doc.data().title;
         document.getElementById("source").innerHTML = doc.data().source;
         document.getElementById("time").innerHTML = doc.data().time;
         document.getElementById("summary").innerHTML = doc.data().summary;
         document.getElementById("thumbnail").src = doc.data().thumbnail;
         document.getElementById("caption").innerHTML = doc.data().caption;

         var size = 0;
         news
            .collection("content")
            .get()
            .then((allParagraphs) => {
               size = allParagraphs.size;

               for (let i = 1; i <= size; i++) {
                  let paraID = "p" + i.toString();
                  let paragraph = news
                     .collection("content")
                     .where("id", "==", paraID);

                  paragraph
                     .get()
                     .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                           var tag = document.createElement("div");
                           var text = document.createTextNode(doc.data().text);
                           tag.appendChild(text);

                           document.getElementById("content").appendChild(tag);
                        });
                     })
                     .catch((error) => {
                        console.log("Error getting documents: ", error);
                     });
               }
            });
      } else {
         // doc.data() will be undefined in this case
         console.log("No such document!");
      }
   });
}
displayNews();

/*********************************************/
/* Change font size */
/*********************************************/
changeFontSize = function () {
   firebase.auth().onAuthStateChanged((user) => {
      // Check if user is signed in:
      if (user) {
         // go to the correct user document by referencing to the user uid
         currentUser = db.collection("users").doc(user.uid);
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
/*********************************************/
/* JavaScript for pop-up modal */
/*********************************************/
// Get the modal
var modal = document.getElementById("options");

// Get the button that opens the modal
var btn = document.getElementById("audio-choice");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
   modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
};

/*********************************************/
/* Display audio options */
/*********************************************/
function readAll() {
   var img = document.createElement("img");
   var br = document.createElement("br");

   let allDivs = document.getElementById("content");
   let paragraphs = allDivs.getElementsByTagName("div");

   img.src = "./images/speaking.png";
   img.style.width = "50px";

   for (i = 0; i < paragraphs.length; i++) {
      paragraphs[i].prepend(br.cloneNode(true));
      paragraphs[i].prepend(img.cloneNode(true));
   }
}

function readChoices() {
   var img = document.createElement("input");
   var br = document.createElement("br");

   let allDivs = document.getElementById("content");
   let paragraphs = allDivs.getElementsByTagName("div");

   img.src = "./images/not-speaking.png";
   img.type = "image";
   img.style.width = "50px";

   for (i = 0; i < paragraphs.length; i++) {
      paragraphs[i].prepend(br.cloneNode(true));
      paragraphs[i].prepend(img.cloneNode(true));
   }
}
