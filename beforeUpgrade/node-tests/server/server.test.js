const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

// Server
    // GET /
        // some test case
    //GET /users
            // some test case
        
describe('Server', () => {
    describe('GET /', () => {
        it ('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect('Hello world!')
                .end(done);
        });
    });

    describe('GET /users', () => {
        it ('should return my user in the users route', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({name: 'peter', age: 30});
            })
            .end(done);
        });
    });    

    describe('GET /about', () => {
        it ('should return page not found on about', (done) => {
            request(app)
                .get('/about')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({ error: 'Page not found.' });
                })
                .end(done);
            });
    });
});

