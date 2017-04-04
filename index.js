var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('hihihihii!!!!!!!!');
})

app.get('/yo',function(req, res){
    res.send('YOOOOOOOOOOO');
})

var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:' + server.address().port)
})