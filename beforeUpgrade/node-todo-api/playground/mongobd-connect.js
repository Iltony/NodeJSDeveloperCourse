//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();

console.log(obj);


MongoClient.connect('mongodb://testtodoapp:tesTtodOapp1230.6+@ds247674.mlab.com:47674/todoapp' , 
{ useNewUrlParser: true }, 
(err, client) => { 
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('todoapp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) =>{

    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
       
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // } );

    
    db.collection('Users').insertOne({
        name: 'Antonio',
        age: 35,
        location: 'Montevideo',
    }, (err, result) =>{

        if (err) {
            return console.log('Unable to insert user', err);
        }
       
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    } )


    client.close();
});