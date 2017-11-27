// IOCE
/* 
I: matrix, coordinate of the current pixel - ex. matrix[row][col], fillColor, colorToReplace
O: mutated matrix
C: 

Skeleton:
1a. Stop if 'colorToReplace' doesn't match 'currColor': return
1b. If 'colorToReplace' matches 'currColor', change it to the 'fillColor'
2. For each neighbor: recursively do step 1 for each neighbor

*/

var fillBitMap = function(matrix, coordinate, fillColor, colorToReplace) {
    const currColor = getColor(matrix, coordinate);
    if (!currColor) return;
    if (!colorsAreEqual(colorToReplace, currColor)) return;

    matrix[coordinate.row][coordinate.col] = fillColor;

    fillBitMap(matrix, { 'row': coordinate.row - 1, 'col': coordinate.col }, fillColor, colorToReplace);
    fillBitMap(matrix, { 'row': coordinate.row, 'col': coordinate.col + 1 }, fillColor, colorToReplace);
    fillBitMap(matrix, { 'row': coordinate.row + 1, 'col': coordinate.col }, fillColor, colorToReplace);
    fillBitMap(matrix, { 'row': coordinate.row, 'col': coordinate.col -1 }, fillColor, colorToReplace);
}

var getColor = function(matrix, coordinate) {
    if (matrix[coordinate.row] && matrix[coordinate.row][coordinate.col]) return matrix[coordinate.row][coordinate.col];
    return null;
}

var colorsAreEqual = function(color1, color2) {
    return color1[0] === color2[0] && color1[1] === color2[1] && color1[2] === color2[2];
}

module.exports = {
    'fillBitMap': fillBitMap,
    'getColor': getColor,
    'colorsAreEqual': colorsAreEqual
}