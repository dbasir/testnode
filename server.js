const express = require('express');
const app = express();
var HTTP_PORT = process.env.PORT||3000;


app.listen(HTTP_PORT,()=>{
    console.log("working!!");
});

app.get('/',(req,res)=>{
    res.send("welcome to the home page")
    
})
