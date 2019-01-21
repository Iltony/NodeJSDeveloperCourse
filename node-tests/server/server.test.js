const request = require('supertest');

var app = require('./server').app;

it ('should return hello world response', (done)=>{
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello world!')
        .end(done);
});

it ('should return page not found on about', (done) => {
    request(app)
        .get('/about')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({ error: 'Page not found.' });
        })
        .end(done);
});

it ('should return my user in the users route', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toInclude({name: 'peter', age: 30});
        })
        .end(done);
});