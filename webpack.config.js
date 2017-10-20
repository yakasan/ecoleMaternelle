var webpack = require('webpack');

module.exports = {
    output: {
        path: './public/js/',
        publicPath: '/js/',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000'
            }
        }
    },
    entry: {
        app: ['./src/index.js']
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
};