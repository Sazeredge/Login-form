const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.render("login");
});

app.post("/", function (req, res){
  var username = req.body.username;
  var password = req.body.password;

  if(username === "Julian" && password === "12345678" || username === "Senpai" && password === "12345678"){
    res.render("success")
  }else{
    res.render("failure")
  }
});

app.listen(3000, function(){
  console.log("Server start at port 3000");
});
