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

// Response Json
app.get ("/four", function (req,res) {
    let myJsonArray = [
        {
            Age: 'Tweenty Two',
            name: 'Kamrul',
            town: 'Sylhet'
        },
        {
            Age: 'Tweenty',
            name: 'Suhana',
            town: 'Dhaka'
        }
    ];
    res.json(myJsonArray);
});


app.listen (3300, function(){
    console.log ('Server Run Success')
});



