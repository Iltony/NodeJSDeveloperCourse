const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://testtodoapp:tesTtodOapp1230.6+@ds247674.mlab.com:47674/todoapp',  { useNewUrlParser: true });

module.exports = {
    mongoose
}