const express = require("express");
const bodyParser = require("body-parser")

const app = express();

let items = ["Buy food","Cood food","Eat food"];
let workItems = [];
// set up ejs
app.set('view engine', 'ejs');

// set up bodyParser and tell express to serve
// up the public folder
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

  let date = new Date();
  let option = {
    weekday:"long",
    month:"long",
    day:"numeric"
  };

// format the date
  let day=date.toLocaleDateString("en-US",option);

// render it by ejs instead of res.send()
  res.render("list",{listTitle:day,items:items});
})

app.post("/",function(req,res){

// Decide which route to render and which list to add items
// based on the information provided by the button.
  let item = req.body.newItem;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }



})

// Create get and post for "/work" route
// Create separate item list for work
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",items:workItems});
})

app.post("/work",function(req,res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about",function(req,res){
  res.render("about");
})

app.listen(3000,function(){
  console.log("Server is working on port 3000");
})
