let express = require('express'); // import express module
app = express(); // create application

// res.send --------- work in response body
// res.end --------- work in response end
app.get ('/one', function(req,res){
    res.send ('This is One')
})
app.get ('/two', function(req,res){
    res.end ('This is Two')
})

app.listen (3000, function(){
    console.log ('Server Run Success')
});



