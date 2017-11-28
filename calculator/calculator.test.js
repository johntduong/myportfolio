const {calculate, assembleString} = require('./calculator');

describe('testing the calculator', () => {
    describe('calculate', () => {
        it('returns a result for a given calculation', () => {
            const input = '1+1';
            const expected = 2;
            expect(calculate(input)).toEqual(expected);
        })
    })

    describe('assembleString', () => {
        it('receives a number and adds it to the end of the string when last character is a number', () => {
            const input = '5';
            const string = '1';
            const expected = '15';
            expect(assembleString(input, string)).toEqual(expected);
        })

        it('receives a number and adds it to the end of the string when last character is a symbol', () => {
            const input = '5';
            const string = '1+';
            const expected = '1+5';
            expect(assembleString(input, string)).toEqual(expected);
        })

        it('changes last symbol to new symbol when a new symbol (+, *, /) is used as input', () => {
            const input = '+';
            const string = '1/';
            const expected = '1+';
            expect(assembleString(input, string)).toEqual(expected);
        })

        it ('concatenates input to end of string when last character is a number', () => {
            const input = '/';
            const string = '10';
            const expected = '10/';
            expect(assembleString(input, string)).toEqual(expected);
        })

        it ('concatenates input to end of string if last character is a symbol, one before that is a number, and input character is "-"', () => {
            const input = '-';
            const string = '10/';
            const expected = '10/-';
            expect(assembleString(input, string)).toEqual(expected);
        })

        it ('changes last character to input if last character is "-" and one before that is a symbol (+, *, /)', () => {
            const input = '-';
            const string = '10/-';
            const expected = '10/-';
            expect(assembleString(input, string)).toEqual(expected);
        })
    })
});