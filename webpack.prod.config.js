const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const fs  = require('fs');
const lessToJs = require('less-vars-to-js');

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './assets/styles/ant-theme-vars.less'), 'utf8'));

const VENDOR_LIBS = [
    'react', 'redux', 'react-redux', 'react-dom',
    'react-router', 'react-router-dom', 'redux-thunk'
];

const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: false,
    },
};

const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: false,
        fail: true,
    },
};

const sassLoader = {
    loader: 'sass-loader',
    options: {
        outputStyle: 'compressed',
        sourceMap: false,
    },
};

const scssLoader = [cssLoader, resolveUrlLoader, sassLoader];

const less = {
    loader: 'less-loader',
    options: {
        outputStyle: 'compressed',
        sourceMap: false,
        modifyVars: themeVariables
    },
};

const lessLoader = [cssLoader, less];


module.exports = merge(baseConfig, {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                        use: cssLoader,
                    }
                )
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                        use: scssLoader,
                        publicPath: "/dist"
                    }
                ),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                        use: lessLoader,
                        publicPath: "/dist"
                    }
                ),
            }

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ]
});