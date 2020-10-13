const express = require("express");
const Quote = require('inspirational-quotes');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get("/", function(req, res) {
  res.send(Quote.getQuote());
});





app.listen(3000, function() {
 console.log("Server started successfully");
});