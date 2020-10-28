/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:31:33
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-28 10:46:01
 */
'use strict'
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')
const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    app: ["./src/app.tsx"]
  },
  devtool: "eval-source-map",
  devServer: {
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: false,
    contentBase: false,
    hot: true,
    quiet: true,
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  module: {
    rules: [
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
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'react_ts',
      template: "index.ejs",
      filename: "index.html",
      isProdEnv: false,
      inject: true
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port
      resolve(devWebpackConfig)
    }
  })
})