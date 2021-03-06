'use strict';

var path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        exclude: path.join(__dirname, '../example/app'),
        loader: 'null'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, '../example/app'),
        loader: 'raw-loader'
      },
      {
        test: /\.swf$/,
        loader: "file?name=[path][name].[ext]"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      }
    ]
  }
};
