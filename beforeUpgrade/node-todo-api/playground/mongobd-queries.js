const {ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var todoId = '5c6ebde4c09dcf2ab896dae3'
var userId = '5c6ebde4c09dcf2ab896dae3'

if(!ObjectId.isValid(todoId)){
    console.log('Todo ID is not valid')
}

if(!ObjectId.isValid(userId)){
    console.log('User ID is not valid')
}

Todo.find({
    _id: todoId   
}).then((todos) => {
    console.log('Todos', todos);
})


Todo.findOne({
    _id: todoId   
}).then((todo) => {
    console.log('First todo matching the condition', todo);
})

User.findById({
    _id: userId   
}).then((user) => {

    if (!user){
        console.log('ID not found', userId);
    }
    
    console.log(JSON.stringify(user, undefined, 2));
}).catch(err => {
    console.log(err)
})


