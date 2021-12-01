function sendNewsInfo(newsID) {
   //move to sample-article.html
   window.location.href = "./sample-article.html";

   //send newsID to localStorage so that sample-article can populate news from the FireStore
   localStorage.setItem("newsID", newsID);
}
