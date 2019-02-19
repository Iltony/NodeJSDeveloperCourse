const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://testtodoapp:tesTtodOapp1230.6+@ds247674.mlab.com:47674/todoapp',  { useNewUrlParser: true });

var Todo = mongoose.model('Todo', 
{
	text: {
		type: String
	}, completed:{
		type: Boolean
	}, completedAt:{
		type: Number
	} 
});


var newTodo = new Todo({
	text: 'Cook dinner',
})

newTodo.save().then(
	(doc)=>console.log('saved todo', doc),
	(e) => console.log('Unable to save todo')	
);

var otherTodo = new Todo({
	text: 'Cook dinner 2',
	completed: true,
	completedAt: 123
})

otherTodo.save().then(
	(doc)=>console.log(JSON.stringify(doc, undefined, 2)),
	(e) => console.log('Unable to save todo')	
);