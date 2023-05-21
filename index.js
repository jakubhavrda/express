
const express = require("express")
const app = express();

const PORT = process.env.PORT | 3000;

app.get("/", function(req,res){
    res.json({message: "hello @easdjh"})
})

app.listen(PORT, ()=>{
    console.log("Server runs on port: "+ PORT)
})