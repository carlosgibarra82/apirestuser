const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const app= express()

const hostname='127.0.0.1';
const port =3000;

var users =['Oscar','Juan','Marcos']
var books = [
			{titulo: 'El señor de los anillos', autor: 'J.R.R Tolkien'},
			{titulo: 'Canción de Hielo y Fuego', autor: 'George RR Martin'} ];


//http://localhost:3000
app.get('/',(req,res)=> {
	res.status(200).send("Welcome to API REST")
	})
//http://localhost:3000/user
	app.get('/users',(req,res)=> {
	res.send(users)
	})
//http://localhost:3000/books
	app.get('/books',(req,res)=> {
	res.send(books)
	})

//http://localhost:3000/users
	app.post('/users',(req,res)=> {
	let data =req.query;
	users.push(data.user_name)
	res.send("New user add")
	})
//http://localhost:3000/users/1	
	app.patch('/users/:id', (req, res) =>{
	let params = req.params;
	let data = req.query;
	users[params.id] = data.user_name
	res.send("User update")
	})
	
//http://localhost:3000/users/1		
	app.delete('/users/:id', (req, res) =>{
	let params = req.params;
	users.splice(params.id,1);
	res.send("User delete")
	})
	
	
http.createServer(app).listen(port, () => {
	console.log('Server running at http://${hostname}:${port}/');
	})