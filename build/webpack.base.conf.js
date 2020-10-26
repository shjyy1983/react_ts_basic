/*
 * @Author: SHEN
 * @Date: 2020-01-01 15:14:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-26 22:23:00
 */
'use strict'
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '..'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: false,
          configFile: process.env.NODE_ENV === 'development' ? 'tsconfig.dev.json' : 'tsconfig.prod.json'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
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
    new ForkTsCheckerWebpackPlugin()
  ]
};