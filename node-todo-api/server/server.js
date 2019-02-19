const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://testtodoapp:tesTtodOapp1230.6+@ds247674.mlab.com:47674/todoapp',  { useNewUrlParser: true });

var Todo = mongoose.model('Todo', 
{
	text: {
		type: String,
		required: true,
		minlength: 1, // min length required, if empty or space the validation fails
		trim: true //removes spaces in the value
	}, completed:{
		type: Boolean,
		default: false
	}, completedAt:{
		type: Number,
		default: null
	} 
});


// var newTodo = new Todo({
// 	text: 'Cook dinner',
// })

// newTodo.save().then(
// 	(doc)=>console.log('saved todo', doc),
// 	(e) => console.log('Unable to save todo')	
// );

// var otherTodo = new Todo({
// 	text: 'Cook dinner 2',
// 	completed: true,
// 	completedAt: 123
// })

// otherTodo.save().then(
// 	(doc)=>console.log(JSON.stringify(doc, undefined, 2)),
// 	(e) => console.log('Unable to save todo')	
// );

var User = mongoose.model('User', {
	email: {
		type: String, 
		require: true,
		trim: true,
		minlength: 1
	}
});

var user = new User({
	email: "antonioantonio@gmail.com "	
})

user.save().then(
	(doc)=> console.log(JSON.stringify(doc)),
	() => console.log('Unable to save user')	
);