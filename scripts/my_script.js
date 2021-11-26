/***************************************************/
/* Add a navbar to the top of the body of
 every HTML page with this script */
/**************************************************/
let navbar_setter = function () {
   let nav_container = document.createElement("div");
   nav_container.setAttribute("id", "navbar_container");
   document.body.appendChild(nav_container);
   document.body.insertBefore(nav_container, document.body.firstChild);

   let xHR_nav = new XMLHttpRequest();
   xHR_nav.open("GET", "./navbar_html.xml");
   xHR_nav.onreadystatechange = function () {
      nav_container.innerHTML = xHR_nav.responseText;
   };
   xHR_nav.send();
};
document.body.onload = navbar_setter;

/*********************************************/
/* Declare global variable currentUser */
/*********************************************/
var currentUser;

firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      currentUser = db.collection("users").doc(user.uid);
      console.log("A user is logged in.");
      window.onbeforeunload = writeURL();
   }
});

/*********************************************/
/* When the Save button is clicked, send article's
information to FireStore. */
/*********************************************/
function saveNews(newsID) {
   var currentArticle = db.collection("articles").doc(newsID);
   currentArticle
      .get()
      .then((doc) => {
         if (doc.exists) {
            console.log("Document data:", doc.data());
            let newsTitle = doc.data().title;
            let newsUrl = doc.data().url;
            currentUser.collection("saved_news").doc(newsID).set({
               title: newsTitle,
               url: newsUrl,
            });
         } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
         }
      })
      .catch((error) => {
         console.log("Error getting document:", error);
      });
}

/*********************************************/
/* Each time user visits a new page, add that page URL
to user navigate collection */
/*********************************************/
function writeURL() {
   currentUser
      .update({
         visited: firebase.firestore.FieldValue.arrayUnion(window.location.href),
      })
      .then(() => {
         console.log("URL successfully written!");
      })
      .catch((error) => {
         console.error("Error writing URL: ", error);
      });

   //Only allows 5 URLs to be saved
   currentUser.get().then((doc) => {
      if (doc.exists) {
         console.log("Document data:", doc.data());

         let vistedURLs = doc.data().visited;

         if (vistedURLs.length > 5) {
            currentUser.update({
               visited: firebase.firestore.FieldValue.arrayRemove(
                  vistedURLs[0]
               ),
            });
         }
      }
   });
}

/*********************************************/
/* When the Back button is clicked, navigate to the
previous page that user visits */
/*********************************************/
function goBack() {
   currentUser
      .get()
      .then((doc) => {
         if (doc.exists) {
            let vistedURLs = doc.data().visited;
            let minimum_page = 2
            if (vistedURLs.length >= minimum_page) {
               console.log("Return to ", doc.data());

               let last = vistedURLs[vistedURLs.length - 2];
               window.location.href = last;

               currentUser
               .update({
                  visited: firebase.firestore.FieldValue.arrayRemove(vistedURLs[vistedURLs.length - 1]),
               })
               .then(() => {
                  console.log("URL successfully removed!");
               })
               .catch((error) => {
                  console.error("Error removing URL: ", error);
               });
            }
            else
               alert("No page to go back to.")

         } else {
            console.log("No such document!");
         }
      })
      .catch((error) => {
         console.log("Error getting document:", error);
      });
}

/*********************************************/
/* Toggle between showing and hiding the navigation menu links
when the user clicks on the hamburger menu / bar icon */
/*********************************************/
function myFunction() {
   var x = document.getElementById("myLinks");
   if (x.style.display === "block") {
      x.style.display = "none";
   } else {
      x.style.display = "block";
   }
}


function insertTitle() {
   firebase.auth().onAuthStateChanged(user => {

      if (user) {


         currentUser = db.collection("users").doc(user.uid).collection("saved_news").doc("0001");

         currentUser.get()
            .then(saved_newsDoc => {
               var Title = saved_newsDoc.data().title;
               var url = saved_newsDoc.data().url;
               console.log(Title);
               $("#title1").text(Title);
               $("#url1").text(url);
            })
            currentUser = db.collection("users").doc(user.uid).collection("saved_news").doc("0002");

         currentUser.get()
            .then(saved_newsDoc => {
               var Title = saved_newsDoc.data().title;
               var url = saved_newsDoc.data().url;
               console.log(Title);
               $("#title2").text(Title);
               $("#url2").text(url);
            })
            currentUser = db.collection("users").doc(user.uid).collection("saved_news").doc("0003");

         currentUser.get()
            .then(saved_newsDoc => {
               var Title = saved_newsDoc.data().title;
               var url = saved_newsDoc.data().url;
               console.log(Title);
               $("#title3").text(Title);
               $("#url3").text(url);
            })
            currentUser = db.collection("users").doc(user.uid).collection("saved_news").doc("0004");

         currentUser.get()
            .then(saved_newsDoc => {
               var Title = saved_newsDoc.data().title;
               var url = saved_newsDoc.data().url;
               console.log(Title);
               $("#title4").text(Title);
               $("#url4").text(url);
            })
            currentUser = db.collection("users").doc(user.uid).collection("saved_news").doc("0005");

         currentUser.get()
            .then(saved_newsDoc => {
               var Title = saved_newsDoc.data().title;
               var url = saved_newsDoc.data().url;
               console.log(Title);
               $("#title5").text(Title);
               $("#url5").text(url);
            })
            currentUser = db.collection("users").doc(user.uid).collection("saved_news").doc("0006");

         currentUser.get()
            .then(saved_newsDoc => {
               var Title = saved_newsDoc.data().title;
               var url = saved_newsDoc.data().url;
               console.log(Title);
               $("#title6").text(Title);
               $("#url6").text(url);
            })

      } else {
         // No user is signed in.
      }
   });
}
insertTitle();



