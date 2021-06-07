//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/music", function(req, res) {
  res.render("music");
});

app.get("/store", function(req, res) {
  res.render("store");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});



app.listen(3000, function() {
  console.log("Now listening on Port 3000");
});
