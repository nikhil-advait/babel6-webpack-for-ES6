var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/css/main.css',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'main.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {  
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
      },
      { 
        test: /\.css$/,
        loader: "style!css"
      },
    ]
  },
  devServer: {
    contentBase: "./src"
  }
};
