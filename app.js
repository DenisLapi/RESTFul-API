// Pozivamo sve fajlove u ovaj fajl i aktiviramo ih kada se aplikacija pokrene

var bodyParser = require('body-parser')
var express = require("express");
var app = express();


app.use(bodyParser.json()); // Define sending json as req

app.use(require("./controllers/")); // Ucitavamo controller

app.listen(2000, () => {
  console.log("Started listening on port: 2000");
});
