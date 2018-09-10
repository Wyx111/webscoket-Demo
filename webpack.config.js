var webpack = require('webpack');
var path = require('path');
var APP_Path = path.resolve(__dirname, 'src/app')
var BUNDLE_Path = path.resolve(__dirname, 'src/public')
var config = {
    entry: APP_Path + '/index.js',
    output: {
        path: BUNDLE_Path,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: APP_Path,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    }
}
module.exports = config;