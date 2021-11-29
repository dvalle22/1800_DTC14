function insertTitle() {
   firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         news = db
            .collection("users")
            .doc(user.uid)
            .collection("saved_news")
            .doc("0001");

         news.get().then((saved_newsDoc) => {
            var Title = saved_newsDoc.data().title;
            var url = saved_newsDoc.data().url;
            console.log(Title);
            $("#title1").text(Title);
            $("#url1").text(url);
         });
         news = db
            .collection("users")
            .doc(user.uid)
            .collection("saved_news")
            .doc("0002");

         news.get().then((saved_newsDoc) => {
            var Title = saved_newsDoc.data().title;
            var url = saved_newsDoc.data().url;
            console.log(Title);
            $("#title2").text(Title);
            $("#url2").text(url);
         });
         news = db
            .collection("users")
            .doc(user.uid)
            .collection("saved_news")
            .doc("0003");

         news.get().then((saved_newsDoc) => {
            var Title = saved_newsDoc.data().title;
            var url = saved_newsDoc.data().url;
            console.log(Title);
            $("#title3").text(Title);
            $("#url3").text(url);
         });
         news = db
            .collection("users")
            .doc(user.uid)
            .collection("saved_news")
            .doc("0004");

         news.get().then((saved_newsDoc) => {
            var Title = saved_newsDoc.data().title;
            var url = saved_newsDoc.data().url;
            console.log(Title);
            $("#title4").text(Title);
            $("#url4").text(url);
         });
         news = db
            .collection("users")
            .doc(user.uid)
            .collection("saved_news")
            .doc("0005");

         news.get().then((saved_newsDoc) => {
            var Title = saved_newsDoc.data().title;
            var url = saved_newsDoc.data().url;
            console.log(Title);
            $("#title5").text(Title);
            $("#url5").text(url);
         });
         news = db
            .collection("users")
            .doc(user.uid)
            .collection("saved_news")
            .doc("0006");

         news.get().then((saved_newsDoc) => {
            var Title = saved_newsDoc.data().title;
            var url = saved_newsDoc.data().url;
            console.log(Title);
            $("#title6").text(Title);
            $("#url6").text(url);
         });
      } else {
         // No user is signed in.
      }
   });
}
insertTitle();
