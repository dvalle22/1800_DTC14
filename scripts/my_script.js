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

/*********************************************/
function writeWebcamData() {
   //this is an array of JSON objects copied from open source data
   var webcams = [
      {
         datasetid: "web-cam-url-links",
         recordid: "01d6f80e6ee6e7f801d2b88ad7517bd05223e790",
         fields: {
            url: "http://images.drivebc.ca/bchighwaycam/pub/html/www/17.html",
            geom: {
               type: "Point",
               coordinates: [-123.136736007805, 49.2972589838826],
            },
            mapid: "TCM015",
            name: "Stanley Park Causeway",
         },
         record_timestamp: "2021-03-22T10:32:40.391000+00:00",
      },
      {
         datasetid: "web-cam-url-links",
         recordid: "d95ead494c2afbb5f47efdc26bf3ea8c6b8b2e22",
         fields: {
            url: "http://images.drivebc.ca/bchighwaycam/pub/html/www/20.html",
            geom: {
               type: "Point",
               coordinates: [-123.129968, 49.324891],
            },
            mapid: "TCM017",
            name: "North End 2",
         },
         record_timestamp: "2021-03-22T10:32:40.391000+00:00",
      },
      {
         datasetid: "web-cam-url-links",
         recordid: "8651b55b799cac55f9b74d654a88f3500b6acd64",
         fields: {
            url: "https://trafficcams.vancouver.ca/cambie49.htm",
            geom: {
               type: "Point",
               coordinates: [-123.116492357278, 49.2261139995231],
            },
            mapid: "TCM024",
            name: "Cambie St and W 49th Av",
            geo_local_area: "Oakridge",
         },
         record_timestamp: "2021-03-22T10:32:40.391000+00:00",
      },
      {
         datasetid: "web-cam-url-links",
         recordid: "f66fa2c58d19e3f28cf8b842bfa1db073e32e71b",
         fields: {
            url: "https://trafficcams.vancouver.ca/cambie41.htm",
            geom: {
               type: "Point",
               coordinates: [-123.116192190431, 49.2335434721856],
            },
            mapid: "TCM025",
            name: "Cambie St and W 41st Av",
            geo_local_area: "South Cambie",
         },
         record_timestamp: "2021-03-22T10:32:40.391000+00:00",
      },
      {
         datasetid: "web-cam-url-links",
         recordid: "7c3afe1d3fe4c80f24260a4946abea3fb15b7017",
         fields: {
            url: "https://trafficcams.vancouver.ca/cambie25.htm",
            geom: {
               type: "Point",
               coordinates: [-123.115406053889, 49.248990875309],
            },
            mapid: "TCM026",
            name: "Cambie St and W King Edward Av",
            geo_local_area: "South Cambie",
         },
         record_timestamp: "2021-03-22T10:32:40.391000+00:00",
      },
      {
         datasetid: "web-cam-url-links",
         recordid: "7fea7df524a205c0c0eb8efcc273345356cbe8d1",
         fields: {
            url: "https://trafficcams.vancouver.ca/mainTerminal.htm",
            geom: {
               type: "Point",
               coordinates: [-123.100028035364, 49.2727762979223],
            },
            mapid: "TCM028",
            name: "Main St and Terminal Av",
            geo_local_area: "Downtown",
         },
         record_timestamp: "2021-03-22T10:32:40.391000+00:00",
      },
   ];

   webcams.forEach(function (cam) {
      //cycle thru json objects in array
      console.log(cam); //just to check it out
      db.collection("webcams")
         .add(cam) //add this new document
         .then(function (doc) {
            //success
            console.log("wrote to webcams collection " + doc.id);
         });
   });
}
