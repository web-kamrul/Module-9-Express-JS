let express = require('express'); // import express module
app = express(); // create application

app.get ('/', function(req,res){
    res.send ('This is Home page');
});

app.get ('/about', function(req,res){
    res.send ('This is About page');
});

app.put ('/gallery', function(req,res){
    res.send ('This is Gallery page');
});

app.post ('/contact', function(req,res){
    res.send ('This is Contact page');
});

app.listen (8200, function(){
    console.log ('Server Run Success')
});

