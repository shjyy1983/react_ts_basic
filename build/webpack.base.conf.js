/*
 * @Author: SHEN
 * @Date: 2020-01-01 15:14:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-28 10:47:10
 */
'use strict'
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '..'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /(node_modules|dist)/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
  ]
};