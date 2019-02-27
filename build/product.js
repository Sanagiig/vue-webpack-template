const path = require("path");
const webpack = require("webpack");
const extractTextPlugin = require("extract-text-webpack-plugin");
const clearPlugin = require("clean-webpack-plugin");
const webpackBase = require("./base").buildWebpackBase("product");
const config = require("../config").build;
const util = require("./util");

console.log(webpackBase.rules);
module.exports = {
  rules: webpackBase.rules,
  plugins: webpackBase.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    // new extractTextPlugin({
    //   filename: path.posix.join(
    //     config.assetsSubDirectory,
    //     "css/[name].[contenthash].css"
    //   ),
    //   // Setting the following option to `false` will not extract CSS from codesplit chunks.
    //   // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
    //   // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
    //   // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
    //   allChunks: true
    // }),
    new extractTextPlugin("style.css"),
    new clearPlugin("dist/*.*", {
      root: path.join(__dirname, "../"),
      verbose: true,
      dry: false
    })
  ])
};
