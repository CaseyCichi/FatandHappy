// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Reservation Tables
// =============================================================
var reservations = [{
    customerEmail: "example@exemple.com",
    customerID: "example",
    customerName: "example",
    phoneNumber: "888888888"
}];

var waitinglist = [];

// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});