const webpack = require("webpack");
const extractTextPlugin = require("extract-text-webpack-plugin");
const clearPlugin = require("clean-webpack-plugin");

const baseConfig = require("./base");

module.exports = {
  rules: baseConfig.rules,
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new extractTextPlugin("style.css"),
    new clearPlugin({
      root: "../dist/",
      verbose: true,
      dry: false
    })
  ].concat(baseConfig.plugins),
  devServer: null
};
