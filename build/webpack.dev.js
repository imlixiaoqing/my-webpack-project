const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {

  mode: 'development',
  // mode: 'production',
  // devtool: 'cheap-module-source-map',

  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase:  './dist',
    // open: true,
    port: '8080',
    hot: true,
    hotOnly: true
    // proxy: {
    //   // 'api': 'http://localhost:3000/'
    // }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          "presets": [
            ["@babel/preset-env", {
              target: {
                chrome: '67'
              },
              "useBuiltIns": 'usage'
            }]
          ]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Output 122',
      // template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  

  output: {
    // publicPath: '/',
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};