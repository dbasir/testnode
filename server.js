const express = require('express');
const app = express();



app.listen(3000,()=>{
    console.log("working!!");
});

app.get('/',(req,res)=>{
    res.send("welcome to the home page")
    
})
console.log("hello");