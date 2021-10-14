const express = require("express");
const bodyParser = require("body-parser")

const app = express();

let items = ["Buy food","Cood food","Eat food"];
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
  res.render("list",{day:day,items:items});
})

app.post("/",function(req,res){
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("Server is working on port 3000");
})
