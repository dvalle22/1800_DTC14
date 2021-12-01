/*********************************************/
/* Populate news to the template */
/*********************************************/
function displayNews() {
   //if user hasn't logged in, display sample article.
   let newsID = "test_article";

   if (localStorage.getItem("newsID") != null) {
      //get newsID from localStorage
      newsID = localStorage.getItem("newsID");
   }

   let news = db.collection("articles").doc(newsID);

   news.get().then((doc) => {
      if (doc.exists) {
         //populate basic elements
         document.getElementById("title").innerHTML = doc.data().title;
         document.getElementById("source").innerHTML = doc.data().source;
         document.getElementById("time").innerHTML = doc.data().time;
         document.getElementById("summary").innerHTML = doc.data().summary;
         document.getElementById("thumbnail").src = doc.data().thumbnail;
         document.getElementById("caption").innerHTML = doc.data().caption;

         //populate paragraphs
         var size = 0;
         news
            .collection("content")
            .get()
            .then((allParagraphs) => {
               //find the total number of paragraphs
               size = allParagraphs.size;

               for (let i = 1; i <= size; i++) {
                  //loop through the list to find p1, p2, p3,...
                  let paraID = "p" + i.toString();
                  let paragraph = news
                     .collection("content")
                     .where("id", "==", paraID);

                  //add p1, p2, p3,... to the html
                  paragraph
                     .get()
                     .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                           //create a new div, add content and styling to it
                           var tag = document.createElement("div");
                           var text = document.createTextNode(doc.data().text);
                           tag.appendChild(text);
                           tag.setAttribute("class", "paragraph");

                           //add the div to the news content section
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

//if user chooses to readAll(), add the speaking icon to all paragraphs
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

//if user chooses to readChoices(), add the not-spreaking icon to all paragraphs

//if this feature is fully functional, the not-spreaking icon is supposed to change
//to speaking-icon when user clicks on it.
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
