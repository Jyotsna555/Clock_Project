const express = require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(express.static("client"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    console.log("Get Request posted");
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
});
//https://clockandalarm.herokuapp.com/