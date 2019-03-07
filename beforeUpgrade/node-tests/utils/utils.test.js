
const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    describe('#Add', () => {
        it('should add two numbers', ()=> {
            const res = utils.add(33, 11);
            
            expect(res).toBe(44).toBeA('number');
        })

        it('should async add two numbers', (done)=> {
            const res = utils.asyncAdd(4, 3, (sum)=>{
                expect(sum).toBe(7).toBeA('number');
                done();
            });    
        })
    });

    it('should square a numbers', ()=> {
        const res = utils.square(3);
        expect(res).toBe(9).toBeA('number');
    })


    it('should async square a number', (done)=> {
        const res = utils.asyncSquare(3, (square)=>{
            expect(square).toBe(9).toBeA('number');
            done()
        });
    })

    it('should verify first and last names are set', ()=> {
        // assert it includes first and last name properly

        let user = { location: 'Philadelphia', age: 25 };
        const res = utils.setName(user, "Juan Benedeto");
        expect(res).toInclude({ 
            firstName: 'Juan',
            lastName: 'Benedeto' });
    })

});