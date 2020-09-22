var express = require('express');
var app = express();

app.get('/home',function(req,res){
    res.send('Welcome to express');
})

app.listen(3000,function(){
    console.log('server listening to the port 3000')
})

//http://localhost:3000/login/sachin/kolkata
app.get('/login/:username/:city', function(req,res){
    var uname = req.params.username;
    var ucity = req.params.city;
    res.send(`Welcome ${uname} from  ${ucity}`);
})

app.get('/loginUser/:username/:city', function(req,res){
    var params = req.params;
    res.send(params);
})
// to send JSON file
app.get('/userDetails/:username/:city',function(req,res){
    var user = {"name":uname,"city" :city};
    res.send(user);
})

app.listen('3000', function() {
    console.log('Server started on port');
})

