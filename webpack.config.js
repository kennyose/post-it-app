const path = require('path');


const config = {
  entry: ['./app/index.js'],

  output: {
    path: './build ',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public',
    inline: true,
    hot: true,
    port: 6969,
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
module.exports = config;
