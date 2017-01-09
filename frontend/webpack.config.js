const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || "development";
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSCSS = new ExtractTextPlugin('style.css');
const extractJSON = new ExtractTextPlugin('data.json');

module.exports = {
    context: path.resolve(__dirname, "app"),
    entry: {
        "bbc": "./last-news/index.js",
        "ng": "./national-geographic-news/index.js",
        "blog": "./blog/index.js",
        "login": "./login/index.js"
    },

    output: {
        path: "./../public",
        publicPath: './../',
        filename: "[name].js",
        library: "[name]"
    },

    watch: NODE_ENV == "development",

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == "development" ? "cheap-module-source-map" : null,

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'],

    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        //fallback: path.resolve('./my_loaders/first-loader'),
        extensions: ['', '.js'],
        alias: { my$: path.resolve(__dirname, 'my_loaders')}
    },

    plugins: [
        new webpack.NoErrorsPlugin(),

        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new webpack.NoErrorsPlugin(),

        extractSCSS,
        extractJSON
    ],


    module: {
        loaders: [
            {
                test: /\.js/,
                loader: "babel"
            },

            {
                test: /\.scss$/,
                loader: extractSCSS.extract("style", "css?minimize!postcss!sass?sourceMap")
            },

            {
                test: /\.json$/,
                loaders: ["json", 'my?count="removedItem"']
            }
        ]
    },

	devServer: {
		port: 8080,
		contentBase: __dirname + '/public',
        hot: true
    },
    debug: true
};
