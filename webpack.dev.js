const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

require('dotenv').config({ path: '.env.development' });

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.MY_VARIABLE': JSON.stringify(process.env.MY_VARIABLE)
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    publicPath: '/',
    port: 9000
  }
});
