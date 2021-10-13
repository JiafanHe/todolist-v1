const express = require("express");
const bodyParser = require("body-parser")

const app = express();

var items = ["But food","Cood food","Eat food"];
// set up ejs
app.set('view engine', 'ejs');

// set up bodyParser
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){

  var date = new Date();
  var option = {
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
  };

// format the date
  var day=date.toLocaleDateString("en-US",option);

// render it by ejs instead of res.send()
  res.render("list",{day:day,items:items});
})

app.post("/",function(req,res){
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("Server is working on port 3000");
})
