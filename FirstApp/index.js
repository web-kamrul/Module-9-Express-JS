let express = require('express'); // import express module
app = express(); // create application

app.get ('/', function(req,res){
    res.send ('Hello Express js');
});

app.listen (8000, function(){
    console.log ('Server Run Success')
});

