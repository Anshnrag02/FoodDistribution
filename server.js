const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// login 
app.post('/login', (req, res) => {
	res.send(req.body);
})

// ngo registraion
app.post('/ngoRegistration', (req, res) => {
let ngoTable = {
 	name: req.body.name,
 	state: req.body.state, 
 	city: req.body.city, 
 	number: req.body.number 
 } 
 let login ={
 	username: req.body.email,
 	password: req.body.password
 }
	db.ngoRegistration(function(result){
    res.render('welcome',{name:result});
  }, ngoTable, login);

})

// Users registration
app.post('/userRegistration', (req, res) => {
 let login ={
 	username: req.body.email,
 	password: req.body.password
 }

	db.userRegistration(function(result){
    res.render('welcome',{name:result});
  }, req.body, login);

})

//Users login
app.post('/login', (res,req)=>{
	
})

// landing page
app.use("/", express.static( __dirname + "/public"))

app.listen(4000, () => {
	console.log('server started at 4000');
})