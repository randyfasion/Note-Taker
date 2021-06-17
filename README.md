# 11 Express.js: Note Taker

## Your Task

As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete. This application uses an Express.js back end and will save and retrieve note data from a JSON file.

The entire application is deployed to Heroku.


Deployed Application:

<a href="https://randynotetaker.herokuapp.com" >Note Taker<a>


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

<a href="https://github.com/randyfasion/Note-Taker">GitHub<a>


## Contact Information
Email: RandyFaison@gmail.com


- - -
## License
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


