const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

//red notes from db.json
let notes = fs.readFileSync('./db/db.json');
notes = JSON.parse(notes)



const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(express.static(path.join(__dirname, '/public')));



//home route
app.get('/', (req,res)=> res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));