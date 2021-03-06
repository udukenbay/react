var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    app: ./src/App.js
  },
  output: {
    filename:"build/bundle.js",
      sourceMapFilename: "build/bundle.map"
  },
  devtool: '#source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node-modules|bower-components)/,
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
