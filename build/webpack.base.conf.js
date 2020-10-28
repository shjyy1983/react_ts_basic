/*
 * @Author: SHEN
 * @Date: 2020-01-01 15:14:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-28 22:26:55
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
          (process.env.NODE_ENV === 'production' ?  {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          } : 'style-loader'),
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          (process.env.NODE_ENV === 'production' ?  {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 由于 MiniCssExtractPlugin 会提取到 css 目录下，而 css 中的资源文件被设置在 css 同级目录，所以这里要指定相对目录
              publicPath: '../'
            }
          } : 'style-loader'),
          'css-loader',
          'postcss-loader',
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
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          esModule: false,
          name: 'images/[name].[hash:7].[ext]'
        }
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