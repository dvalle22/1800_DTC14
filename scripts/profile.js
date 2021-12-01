/*********************************************/
/* When the page is loaded, populate user's information
(if any) to the html */
/*********************************************/
function populateInfo() {
   firebase.auth().onAuthStateChanged((user) => {
      // Check if user is signed in:
      if (user) {
         //get the document for current user.
         currentUser.get().then((userDoc) => {
            //get the data fields of the user
            var username = userDoc.data().name;
            var useremail = userDoc.data().email;
            var userphone = userDoc.data().phone;
            var f_name = userDoc.data().first_name;
            var l_name = userDoc.data().last_name;
            var address = userDoc.data().address;
            var city = userDoc.data().city;
            var country = userDoc.data().country;
            var postal_code = userDoc.data().postal_code;
            var guardian_name = userDoc.data().guardian_name;
            var guardian_type = userDoc.data().guardian_type;
            var guardian_phone = userDoc.data().guardian_phone;
            var about_me = userDoc.data().about_me;

            //if the data fields are not empty, then write them into the form.
            if (username != null) {
               document.getElementById("username").value = username;
               document.getElementById("name-goes-here").innerText = username;
            }
            if (useremail != null) {
               document.getElementById("email").value = useremail;
            }
            if (userphone != null) {
               document.getElementById("phone").value = userphone;
            }
            if (f_name != null) {
               document.getElementById("f_name").value = f_name;
            }
            if (l_name != null) {
               document.getElementById("l_name").value = l_name;
            }
            if (address != null) {
               document.getElementById("address").value = address;
            }
            if (city != null) {
               document.getElementById("city").value = city;
            }
            if (country != null) {
               document.getElementById("country").value = country;
            }
            if (postal_code != null) {
               document.getElementById("postal-code").value = country;
            }
            if (guardian_name != null) {
               document.getElementById("guardian-name").value = guardian_name;
            }
            if (guardian_type != null) {
               document.getElementById("guardian-type").value = guardian_type;
            }
            if (guardian_phone != null) {
               document.getElementById("guardian-phone").value = guardian_phone;
            }
            if (about_me != null) {
               document.getElementById("about-me").value = about_me;
            }
         });
      } else {
         // No user is signed in.
         console.log("No user is signed in");
      }
   });
}
populateInfo();

/*********************************************/
/* When the Edit button is clicked,
allow user to edit the form */
/*********************************************/
function editUserInfo() {
   document.getElementById("personalInfoFields").disabled = false;
}

/*********************************************/
/* When the Save button is clicked,
send user's changes to the FireStore */
/*********************************************/
function saveUserInfo() {
   //get user's changes
   username = document.getElementById("username").value;
   email = document.getElementById("email").value;
   phone = document.getElementById("phone").value;
   f_name = document.getElementById("f_name").value;
   l_name = document.getElementById("l_name").value;

   address = document.getElementById("address").value;
   city = document.getElementById("city").value;
   country = document.getElementById("country").value;
   postal_code = document.getElementById("postal-code").value;

   guardian_name = document.getElementById("guardian-name").value;
   guardian_type = document.getElementById("guardian-type").value;
   guardian_phone = document.getElementById("guardian-phone").value;

   about_me = document.getElementById("about-me").value;

   //update the changes
   currentUser.update({
      first_name: f_name,
      last_name: l_name,
      name: username,
      email: email,
      phone: phone,
      address: address,
      city: city,
      country: country,
      postal_code: postal_code,
      guardian_name: guardian_name,
      guardian_type: guardian_type,
      guardian_phone: guardian_phone,
      about_me: about_me,
   });

   //disable the form again
   document.getElementById("personalInfoFields").disabled = true;
}
