const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://testtodoapp:tesTtodOapp1230.6+@ds247674.mlab.com:47674/todoapp' , 
{ useNewUrlParser: true }, 
(err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('todoapp');

    //deleteMany
    db.collection('Todos').deleteMany({text: 'Todo to delete'}).then((result)=> {
        console.log(result);
    });

    //deleteOne


    //find

    

    // client.close();
});