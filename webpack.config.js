const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const NodemonPlugin = require('nodemon-webpack-plugin')

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js'
    },
    externals: nodeModules,
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new NodemonPlugin({
            watch: path.resolve('./dist'),
            script: './dist/server.js'
        }),
    ],
    devtool: 'sourcemap'
}