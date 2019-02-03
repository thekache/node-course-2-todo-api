const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connencted to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        Name: 'user',
        age: 25,
        location: 'Geo'
    }, (err, result) =>{
        if (err){
            return console.log('Unable to insert Users', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});