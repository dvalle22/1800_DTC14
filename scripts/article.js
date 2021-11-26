//Populate news to the template
let news = db.collection("articles").doc("0002");

news.get().then((doc) => {
   if (doc.exists) {
      console.log("Document data:", doc.data());
      document.getElementById("title").innerHTML = doc.data().title;
   } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
   }
});

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