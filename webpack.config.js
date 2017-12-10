const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './SerialAPI/js/main.jsx',
    output: {
        path: path.join(__dirname, '/SerialAPI/static/js/'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                // Test for js or jsx files
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    // Convert ES6 syntax to ES5 for browser compatibility
                    presets: ['es2015', 'react'],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            moduleFilenameTemplate: path.relative(path.join(__dirname, '/SerialAPI/static/js/'), '[resourcePath]')
        })]
};