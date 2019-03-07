const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://testtodoapp:tesTtodOapp1230.6+@ds247674.mlab.com:47674/todoapp' , 
{ useNewUrlParser: true }, 
(err, client) => { 
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('todoapp')
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c6717c02206c34860d2fe56")
    }, {
        $set: {
            Name: 'Antonio'
        }, $inc: {
            Age: 1
        }
    },
    {
        returnOriginal: false
    })
    .then((result)=> {
        console.log(result);
    })
    
    

    

    // client.close();
});