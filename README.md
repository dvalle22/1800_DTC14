## UCare

-  [General info](#general-info)
-  [Technologies](#technologies)
-  [Contents](#content)
-  [Detailed Work](#detailed-work)
-  [Acknowledgement](#acknowledgement)

## General Info

Our product is UCare, a web-based application. \
UCare helps the elderly catch up with advanced technology by creating a friendly platform for them to read news, search for aid, and train their technical skills. \
This browser based web application is a product of Melanie Ta, Danilo Valle, and Chengyang Li.

## Technologies

Technologies used for this project:

-  HTML, CSS
-  JavaScript
-  Bootstrap
-  W3Schools
-  FireBase, FireStore

## Content

Content of the project folder.

```
Top level of project folder:
Files are not listed in alphabetically order for the purpose of demonstrating the grouping of contents.

├── .gitignore                      # Git ignore file
├── index.html                      # landing HTML file, what users see when they come to url
├── login.html                      # login HTML file, the login and sign up page
├── main.html                       # HTML file for main page, what the users see when they are logged in
|
├── news.html                       # HTML file for news page, where users choose news to read
├── sample-article.html             # HTML file for article page, which will display the news users choose to read
├── saved-news.html                 # HTML file for saved news page, which will display users' saved news
|
├── skills-centre.html              # HTML file for skills centre, where users choose to learn new lessons or access saved lesson
├── skills-centre-categories.html   # HTML file for skill categories page
├── sample-skill.html               # HTML file for skill page, which is displaying a template for skill learning
├── saved-skill.html                # HTML file for saved skill page, which will display users' saved skills
|
├── settings.html                   # HTML file for settings page, where users can modify volume and font size
├── profile.html                    # HTML file for profile page, where users can type and update their information
├── faq.html                        # HTML file for frequently asked questions page
├── contact-us.html                 # HTML file for contact us page, where users can submit enquiry
|
├── navbar-html.xml                 # XML file which contains the html navbar, which will be inserted automatically to all HTML files
|
└── README.md

It has the following subfolders and files:
Files are listed in the order they appear in the navbar.

├── .vscode                  # Folder for project settings
|
├── .git                     # Folder for git repo
|
├── images                   # Folder for images
    /Logo.png                # Logo of the product, with transparent background
    /Logo.psd                # Logo of the product in .psd
    /audio-cancel.png
    /audio-choice.png
    /save.png
    /speaking.png
    /not-speaking.png
    /skillscentre            # All icons for Skills Centre
        /categories
            /finance.jpg
            /social.jpg
        /video_player.jpg
|
├── scripts                  # Folder for scripts
    /firebaseAPI.js          # Firebase API shared across pages
    /my_script.js            # JS for functions shared across pages
    /login.js                # JS for firebase login
    /news.js                 # JS for news.html
    /article.js              # JS for sample-article.html
    /saved-news.js           # JS for saved-news.html
    /skill.js                # JS for skills centre pages
    /saved-skill.js          # JS for saved-skill.html
    /profile.js              # JS for profile.html
    /settings.js             # JS for settings.html
    /apply-settings.js       # JS to apply font setting in certain pages
    /contact-us.js           # JS for contact-us.html
|
├── styles                   # Folder for styles
    /my_styles.css           # style shared across pages
    /news.css                # style shared across news pages
    /article.css             # style for sample-article.html
    /skill.css               # style shared across skills pages
    /settings.css            # style for settings.html
    /profile.css             # style for profile.html
    /faq.css                 # style for faq.html
    /contact-us.css          # style for contact-us.html

Firebase hosting files:

├── .firebase
	/hosting..cache
├── .firebaserc
├── 404.html
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── storage.rules

```

## Detailed Work

This section summarizes the workload of each team member.

-  Melanie Ta

   -  HTML products

   ```
   ├── index.html
   ├── main.html            # Second version, with a menu
   ├── sample-article.html
   ├── saved-news.html      # Second version
   ├── faq.html
   ├── navbar-html.xml      # HTML content
   └── And in charge of checking CSS displays.
   ```

   -  JavaScript products

   ```
   ├── my_script.js         # Except for navbar_setter
   ├── article.js
   ├── news.js
   └── saved_news.js        # Second version, developed from the template of saved_skill.js
   ```

-  Chengyang Li

   -  HTML products

   ```
   ├── login.html
   ├── news.html
   ├── saved-news.html
   ├── profile.html
   └── contact-us.html
   ```

   -  JavaScript products

   ```
   ├── login.js
   ├── saved-news.js        # First version
   └── profile.js
   ```

-  Danilo Valle

   -  HTML products

   ```
   ├── main.html            # First version
   ├── skill-centre.html
   ├── skill-centre-categories.html
   ├── saved-skills.html
   ├── sample-skill.html
   └── settings.html
   ```

   -  JavaScript products

   ```
   ├── my_script.js         # Only navbar_setter
   ├── apply-settings.js
   ├── contact-us.js
   ├── saved-skill.js
   ├── skill.js             # Developed from the template of savedNews() in my_script.js
   └── settings.js
   ```

## Acknowledgement

Images Source:

-  commons.wikimedia.org
-  shuttlestock.com
-  iconfinder.com

Fonts:

-  <a href="https://fonts.google.com/">Google Fonts</a>

Other:

-  <a href="https://getbootstrap.com/">Bootstrap</a>
-  <a href="https://www.w3schools.com/">W3Schools</a>
