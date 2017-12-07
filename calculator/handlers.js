const {calculate, assembleString} = require('./calculator');

const callCalculate = (req, res) => {
    const string = req.params.str;
    let result = calculate(string);
    console.log('callCalculate', result);
    res.send(result);
};

const callAssembleString = (req, res) => {
    const string = req.params.str;
    const input = req.params.input;
    let result = assembleString(string, input);
    console.log('callAssembleString', result);
    res.send(result);
};

module.exports = {
    'callCalculate': callCalculate,
    'callAssembleString': callAssembleString,
};