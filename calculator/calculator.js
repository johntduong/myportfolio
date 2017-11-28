// IOCE for calculate
/*
Input: a calculation as a string 
Output: number value (integer) result of evaluated calculation
*/

/*
Skeleton:
1. evaluate/processs the string
2. return the resulting value as an integer
*/

var calculate = function(str) {
    // 1. evaluate / processs the string
    // 2. return the resulting value as an integer
    return eval(str);
};

// IOCE for assembleString
/* 
  Contract: Assembles a string of numbers and symbols
  Input: number or symbol, string
  Output: new string
*/

/* 
  Skeleton:
  1. if input is a number: concatenate it to string
  2a. if input is a +, x, or a / sign: 
  2b. if last character in string is a symbol: change it to new symbol
  2c. if it's not a symbol, concatenate it
  3a. if input is a - sign:
  3b. if last character in string is a number: concatinate
  3c. if last character in string is a different symbol: concatenate it to string
  3d. if last character in string is a '-': 
  3e. if character before that is a number: concatinate and return result
  3f. if character before that is a different symbol: do nothing and return result 
  4. return new string
*/

var assembleString = function(input, string) {
    let resultString = string;
    // 1. if input is a number: concatenate it to string
    if (parseInt(input)) resultString = resultString.concat(input);
    // 2a. if input is a +, x, or a / sign:
    if (input === '+' || input === 'x' || input === '/') {
        // 2b. if last character in string is a symbol: change it to new symbol
        if (isNaN(resultString[resultString.length - 1])) {
            resultString = resultString.split('');
            resultString[resultString.length - 1] = input;
            return resultString.join('');
        }
        // 2c. if it's not a symbol, concatenate it
        return resultString = resultString.concat(input);
    }
    // 3a.if input is a - sign:
    if (input === '-') {
    }
    // 4. return new string
    return resultString;
};

module.exports = {
    'calculate': calculate,
    'assembleString': assembleString,
}