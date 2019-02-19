const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://testtodoapp:tesTtodOapp1230.6+@ds247674.mlab.com:47674/todoapp',  { useNewUrlParser: true });

// var Todo = mongoose.model('Todo', 
// {
// 	text: {
// 		type: String,
// 		required: true,
// 		minlength: 1, // min length required, if empty or space the validation fails
// 		trim: true //removes spaces in the value
// 	}, completed:{
// 		type: Boolean,
// 		default: false
// 	}, completedAt:{
// 		type: Number,
// 		default: null
// 	} 
// });


var User = mongoose.model('User', {
	email: {
		type: String, 
		require: true,
		trim: true,
		minlength: 1
	}
});


module.exports = {
    mongoose
}