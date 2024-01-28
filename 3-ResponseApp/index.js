let express = require('express'); // import express module
app = express(); // create application

// post or get
// send or end
// res.send --------- work in response body
// res.end --------- work in response end
app.get ('/one', function(req,res){
    res.send ('This is One')
})
app.post ('/two', function(req,res){
    res.end ('This is Two')
})

// Response Status Code
app.get ('/three', function (req, res){
    res.status(404);
    res.end ("Not Found Kamrul Islam")
})

app.listen (3100, function(){
    console.log ('Server Run Success')
});



