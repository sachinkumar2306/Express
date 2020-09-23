var express = require('express');
var app = express();

var bookList = require("./books.json");

app.get("/showBooks", function(req, res)
{
	var match = [];
    keyword = req.query.author;
    for (const key in bookList)
    {
        if(keyword == bookList[key].author)
        {
            match.push(bookList[key]);
        }
        else
        {
            res.send("Author not found")
        }
    }
    res.send(match);
})

app.get('/home', function(req,res){

    res.send('welcome to express');
})

app.get('/login/:username/:city', function(req,res){
    var uname = req.params.username;
    var ucity = req.params.city;
    res.send(`Welcome ${uname} from ${ucity}`);

})

app.get('/loginUser/:username/:city', function(req,res){
    var params = req.params;
    res.send(params);
})

app.get('/userDetails/:username/:city',function(req,res){
    var uname = req.params.username;
    var ucity = req.params.city;
    var user = {"name":uname,"city":ucity};
    res.send(user);
})

app.get('/register',function(req,res){
    name = req.query.studentname;
    id = req.query.studentId;
    res.send({"stName":name,"stId":id});
})

app.listen('3000', function(){
    console.log('server listening to port 3000');
})