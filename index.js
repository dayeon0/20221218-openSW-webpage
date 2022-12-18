const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('listening on 8080')
})

const MongoClient = require('mongodb').MongoClient

var db;
MongoClient.connect("mongodb+srv://dayeon:wallaby09@cluster0.on1cdha.mongodb.net/?retryWrites=true&w=majority", function(err, client){
    if(err) return console.log(err)
    db = client.db('member');
  db.collection('login').insertOne({email: 'cookie@naver.com', password: "chocochip"}, function(err, result){
    console.log("save complete...");
  });


    app.listen(8080, function() {
        console.log('listening on 8080')
    })
})

app.get('/main.html', function(req,res) {
    res.sendFile(__dirname+'/main.html')
})


app.get('/hallym.html', function(req,res) {
  res.sendFile(__dirname+'/hallym.html')
})
app.get('/hallym-meal.html', function(req,res) {
  res.sendFile(__dirname+'/hallym-meal.html')
})
app.get('/hallym-drink.html', function(req,res) {
  res.sendFile(__dirname+'/hallym-drink.html')
})
app.get('/hallym-cafe.html', function(req,res) {
  res.sendFile(__dirname+'/hallym-cafe.html')
})


app.get('/kangwon.html', function(req,res) {
  res.sendFile(__dirname+'/kangwon.html')
})
app.get('/kangwon-meal.html', function(req,res) {
  res.sendFile(__dirname+'/kangwon-meal.html')
})
app.get('/kangwon-drink.html', function(req,res) {
  res.sendFile(__dirname+'/kangwon-drink.html')
})
app.get('/kangwon-cafe.html', function(req,res) {
  res.sendFile(__dirname+'/kangwon-cafe.html')
})


app.get('/chuncheon.html', function(req,res) {
  res.sendFile(__dirname+'/chuncheon.html')
})
app.get('/chuncheon-meal.html', function(req,res) {
  res.sendFile(__dirname+'/chuncheon-meal.html')
})
app.get('/chuncheon-drink.html', function(req,res) {
  res.sendFile(__dirname+'/chuncheon-drink.html')
})
app.get('/chuncheon-cafe.html', function(req,res) {
  res.sendFile(__dirname+'/chuncheon-cafe.html')
})


app.get('/recommend.html', function(req,res) {
  res.sendFile(__dirname+'/recommend.html')
})
app.get('/register.html', function(req,res) {
  res.sendFile(__dirname+'/register.html')
})

app.get('/write', function(req, res) {
    res.sendFile(__dirname+'/write.html')
})

app.post('/add', function(req, res){
    db.collection('login').insertOne({email:req.body.email, password: req.body.password}, function(err, result){
      if(err) return console.log("error");
      console.log("save complete...");
      console.log(req.body.email);
      console.log(req.body.password);
    })
    res.send('send complete.....') + "<br>email:" + req.body.email + "<br>password:" + req.body.password
  });

