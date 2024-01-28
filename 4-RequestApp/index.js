let express = require('express'); // import express module
app = express(); // create application

app.get('/',function(req,res){
    res.end ("This our First Request")
});

app.listen (4000, function(){
    console.log ('Server Run Success')
});



