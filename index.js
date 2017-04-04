var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('hihihihii!!!!!!!!');
})

app.get('/yo',function(req, res){
    res.send('YOOOOOOOOOOO');
})

app.get('*.json', function(req, res){
    res.download('./users' + req.path);
    //res.download('./users' + req.path, 'virus.exe'); //descargar un archivo con esta informacion y el 'virus.exe' nombre del archivo como ejecutable
})

/* Methods for user data */
app.get('/data/:username', function(req,res){
    var username = req.params.username
    console.log('username', username)
    //var user = getUser(username)
    //res.json(user)
})

app.all('/:username', function(req, res, next){
    console.log(req.method, ' for ', req.params.username)
    next()
})

app.delete(function(req,res){
    var fp = getUserFilePath(req.params.username)
    fp.unlinkSync(fp) //delete the file
    res.sendStatus(200)
})

app.get('/error/:username', function(req, res){
    res.status(404).send('No user named: ' + req.params.username + ' found')
})

var server = app.listen(3000, function() {
    console.log('Server running at http://localhost:' + server.address().port)
})