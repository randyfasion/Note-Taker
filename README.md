# 11 Express.js: Note Taker

## Your Task

In this assignment I modified starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end had already been created. Our task was to build the back end, connect the two, and then deploy the entire application to Heroku.


Deployed Application:

<a href="#" >Deployed Application<a>


## Mock-Up

The following images show the web application's appearance and functionality: 

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./public/assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./public/assets/11-express-homework-demo-02.png)


## Getting Started

The application has a `db.json` file on the back end that is used to store and retrieve notes using the `fs` module.

The following HTML routes was created:

* `GET /notes` returns the `notes.html` file.

* `GET *` returns the `index.html` file.

The following API routes was created:

* `GET /api/notes` reads the `db.json` file and returns all saved notes as JSON.

* `POST /api/notes` receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client. Each note has a unique ID.



GitHub Repository:

<a href="#">GitHub<a>


