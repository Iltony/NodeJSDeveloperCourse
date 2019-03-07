const mongoose = require('mongoose');

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


module.exports = {
    Todo
}