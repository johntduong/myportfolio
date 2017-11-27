const { fillBitMap, getColor, colorsAreEqual } = require('./bitMap');

describe('Testing fill bitMap', () => {

    describe('fillBitMap', () => {
        it('fills one pixel', () => {
            const matrix = [
                [[0, 0, 0]]
            ];

            const expected = [
                [[255, 255, 255]]
            ];

            fillBitMap(matrix, { 'row': 0, 'col': 0 }, [255, 255, 255], [0, 0, 0]);
            
            expect(matrix).toEqual(expected)
        })
    })

    describe('getColor', () => {
        it('returns a color if it exists', () => {
            const matrix = [
                [[0, 0, 0]]
            ];

            const coordinate = {
                'row': 0,
                'col': 0
            }

            const expected = matrix[coordinate.row][coordinate.col];

            expect(getColor(matrix, coordinate)).toEqual(expected)
        })

        it('returns nothing if the row does not exist', () => {
            const matrix = [
                [[0, 0, 0]]
            ];

            const coordinate = {
                'row': 1,
                'col': 0
            }

            expect(getColor(matrix, coordinate)).toBeNull();
        })

        it('returns nothing if the col does not exist', () => {
            const matrix = [
                [[0, 0, 0]]
            ];

            const coordinate = {
                'row': 0,
                'col': 1
            }

            expect(getColor(matrix, coordinate)).toBeNull();
        })
    })
    
    describe('colorsAreEqual', () => {
        it('checks if colors are equal', () => {
            const color1 = [0, 0, 0];
            const color2 = [0, 0, 0];
            expect(colorsAreEqual(color1, color2)).toEqual(true);
        })

        it('checks if colors are not equal', () => {
            const color1 = [0, 0, 0];
            const color2 = [255, 255, 255];
            expect(colorsAreEqual(color1, color2)).toEqual(false);
        })
    })
});