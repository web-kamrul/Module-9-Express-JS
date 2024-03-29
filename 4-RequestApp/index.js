let express = require('express'); // import express module
let app = express(); // create application

// Get Request-1 Simple Get Request
app.get('/', function (req, res) {
    res.end("This our First Request");
});

// Get Request-2 Get Request With URL Query
app.get('/query', function (req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
});


// Get Request-2 Working With Get Request Header
app.get('/ReqHeader',function(req,res){
    let firstName = req.header ('firstName');
    let lastName = req.header ('lastName');
    res.end (firstName + '' + lastName);

})


/*
==========================
==========================
Request POst
==========================
==========================
*/

// Post Request-1 Simple Post Request
app.post ('/SimplePost', function (req,res){
    res.send('Our First Simple Post Request')
})


// Post Request-2 Post Request With URL Query
app.get('/PostQuery', function (req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
});




app.listen(4500, function () {
    console.log('Server Run Success');
});




