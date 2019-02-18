const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://testtodoapp:tesTtodOapp1230.6+@ds247674.mlab.com:47674/todoapp' , 
{ useNewUrlParser: true }, 
(err, client) => { 
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('todoapp')
    db.collection('Todos').find({
        _id: new ObjectID('5c66dd06e996b21590e3e109')
    }).toArray().then(
        (docs)=> {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2))
        }
    , (err) => {
        console.log('Unable to fetch todos', err)
    })

    // client.close();
});