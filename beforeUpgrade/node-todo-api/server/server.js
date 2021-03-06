var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	// console.log(req.body);
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then(
	 (doc) => {
		res.send(doc);
	 }, (e) => {
		res.status(400).send(e);
	 });
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos})
	}, (e) => {
		res.status(400).send(e);
	})
	});

app.get('/todos/:id', (req, res) => {
		var todoId = req.params.id;

		if(!ObjectId.isValid(todoId)){
			console.log('Todo ID is not valid')
		}

		Todo.findById({
			_id: todoId   
		}).then((todo) => {
			
			if (!todo){
				console.log('ID not found', todoId);
				res.status(404).send({});
			}

			res.send(JSON.stringify(todo, undefined, 2));
		}).catch(err => {
			res.status(400).send(err);
		})
	});

app.listen(3000, ()=> {
	console.log('Started on port 3000');
})

module.exports = { app };