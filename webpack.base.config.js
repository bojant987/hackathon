const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            ['import', { libraryName: "antd", style: true }]
                        ]
                    }
                }
            },
            {
                use: 'babel-loader',
                test: /\.jsx$/,
                exclude: /node_modules/
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', '.scss', '.less', '.css', '.json'],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true,
        }),
    ]
};