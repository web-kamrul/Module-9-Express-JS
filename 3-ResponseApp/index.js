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

// Response Upload
app.get ('/five', function(req,res){
    res.download("./uploads/abc.jpg");
})

// Response Redirect
app.get ("/ban", function(req,res){
    res.redirect('http://localhost:7500/ind')
})
app.get ("/ind", function(req,res){
    res.send('Welcome To India')
});

// Response Header
app.get ("/ok", function(req,res){
    res.append("Name","Kamrul")
    res.append("Age","Tweenty")
    res.append("City","Sylhet")
    res.status(200).end("Hello World")
})

// Response Set Cookie
app.get ("/SetCookie", function(req,res){
    res.cookie('Owner','Kamrul')
    res.cookie('Wife','Suhana')
    res.cookie('Children','Kaifa')
    res.end ('We Have Set the Cookie')

});

// Response Clear Cookie
app.get ("/ClearCookie", function(req,res){
    res.cookie('Owner')
    res.end('Cookie Clear Successfully')
});

app.listen (4000, function(){
    console.log ('Server Run Success')
});



