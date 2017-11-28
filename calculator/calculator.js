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

const calculate = (str) => {
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

const assembleString = (input, string) => {
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
        // 3b. if last character is minus sign '-'
        if (resultString[resultString.length - 1] === '-') {
            // 3d.if character before that is a number: concatinate and return result
            if (!isNaN(parseInt(resultString[resultString.length - 2]))) resultString = resultString.concat(input);
            // 3c.if character before that is a symbol: do nothing and return result
            return resultString;
        }
        // 3d.if last character in string is a different symbol: concatenate it to string
        resultString = resultString.concat(input);
    }
    // 4. return new string
    return resultString;
};

module.exports = {
    'calculate': calculate,
    'assembleString': assembleString,
}