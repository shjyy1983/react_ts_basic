/*
 * @Author: SHEN
 * @Date: 2020-01-01 15:14:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-28 13:05:28
 */
'use strict'
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


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
        test: /\.css$/,
        use: [
          (process.env.NODE_ENV === 'production' ?  MiniCssExtractPlugin.loader : 'style-loader'),
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          (process.env.NODE_ENV === 'production' ?  MiniCssExtractPlugin.loader : 'style-loader'),
          'css-loader',
          'less-loader'
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