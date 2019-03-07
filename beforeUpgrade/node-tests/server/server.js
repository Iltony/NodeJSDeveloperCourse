const express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.status(200).send('Hello world!');
});

app.get('/about', (req, res)=>{
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo app V1.0'
    });
});

app.get('/users', (req, res)=>{
    res.status(200).send([{ name: 'josua', age: 20 }, { name: 'peter', age: 30 }, { name: 'john', age: 22 }]);
});

app.listen(3000)
module.exports.app = app;