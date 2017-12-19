const formFunctions = require('./app');

console.log(formFunctions.handleFormOneRequest);

// need to prepopulate data in db before running tests

describe('testing the form', () => {
    describe('handleFormOneRequest', () => {
        it('updates or inserts entry in users table and returns an id as a response', () => {
            let input;
            let expected;
            expect(handleFormOneRequest(input)).toEqual(expected);
        })
    })

    describe('updateTableEntry', () => {
        it('updates table entry using input data and returns an id', () => {
            let input1 = {
                attributes:
                    {
                        username: 'supergreen',
                        id: 1,
                        password: '123',
                        email: 'john@email.com',
                        first_name: 'John',
                        last_name: 'Duong',
                        phone_number: '4085317972',
                        address: '123 test street',
                        city: 'san jose',
                        state: 'ca',
                        zip_code: 95121
                    },
                _previousAttributes:
                    {
                        username: 'supergreen',
                        id: 1,
                        password: '123',
                        email: 'john@email.com',
                        first_name: 'John',
                        last_name: 'Duong',
                        phone_number: '4085317972',
                        address: '123 test street',
                        city: 'san jose',
                        state: 'ca',
                        zip_code: 95121
                    },
                changed: {},
                relations: {},
                cid: 'c1',
                _knex: null,
                id: 1
            };
            let input2 = {
                'username': 'wewantchillywilly'
            }
            let expected = 1;
            expect(updateTableEntry(input1, input2)).toEqual(expected);
        })
    })

    describe('createTableEntry', () => {
        it('creates table entry using input data and returns an id', () => {
            let input;
            let expected;
            expect(createTableEntry(input)).toEqual(expected);
        })
    })
});