const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    'common': './src/index',
    'admin': './admin/index'
  },

  output: {
      path: "./../public",
      publicPath: './../',
      filename: "[name].js"
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "admin"),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {
          test: /\.scss$/,
          loader: "style!css?minimize!sass?sourceMap"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    {
        test: /\.html$/,
        loader: 'html',
        query: {
          minimize: true
        }
      }
    ]
  },

  devServer: {
		port: 8080,
		contentBase: __dirname + '/public',
        hot: true
  },
  debug: true

}
