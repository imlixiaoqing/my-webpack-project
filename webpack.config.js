const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    // port: '8000',
    // proxy: {
    //   // 'api': 'http://localhost:3000/'
    // }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new HtmlWebpackPlugin({
      title: 'Output 122',
      // template: 'src/index.html'
    }),
  ],

  

  output: {
    // publicPath: '/',
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};