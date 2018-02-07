const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: ['webpack-dev-server/client?http://localhost:8080','./js/ClientApp.jsx'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    devServer: {
        hot: false,
        publicPath: '/public/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};