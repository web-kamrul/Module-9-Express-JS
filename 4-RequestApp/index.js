let express = require('express'); // import express module
let app = express(); // create application

// Get Request-1 Simple Get Request
app.get('/', function (req, res) {
    res.end("This our First Request");
});

// Get Request-2 Working With Get Request Header
app.get('/query', function (req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end(firstName + " " + lastName);
});

app.listen(4200, function () {
    console.log('Server Run Success');
});




