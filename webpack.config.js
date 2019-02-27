const path = require("path");
const extractTextPlugin = require("extract-text-webpack-plugin");

const devConfig = require("./build/dev");
const prodConfig = require("./build/product");

var conf;
switch (process.env.NODE_ENV.trim()) {
  case "develop":
    // config.devtool = "eval-source-map";
    conf = devConfig;
    break;
  case "test":
    // config.devtool = "source-map";
    conf = devConfig;
    break;
  case "product":
    conf = prodConfig;
    // config.devtool = "source-map";
    break;
  default:
    conf = devConfig;
  // config.devtool = "null";
}

var config = {
  entry: path.join(__dirname, "/src/main.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "build-[hash:12].js"
  },
  // resolve: {
  //   alias: {
  //     vue: "vue/dist/vue.min"
  //   }
  // },
  module: {
    rules: conf.rules
  },
  plugins: conf.plugins
};

if (conf.devServer) {
  config.devServer = conf.devServer;
}

module.exports = config;
