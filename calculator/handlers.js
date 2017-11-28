const callCalculate = (req, res) => {
    console.log('callCalculate');
};

const callAssembleString = (req, res) => {
    console.log('callAssembleString');
};

module.exports = {
    'callCalculate': callCalculate,
    'callAssembleString': callAssembleString,
};