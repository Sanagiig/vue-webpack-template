const vueLoaderPlugin = require("vue-loader/lib/plugin");
const htmlPlugin = require("html-webpack-plugin");
const util = require("./util");
const config = require("../config");

module.exports.buildWebpackBase = function(type) {
  const isProd = type === "product" ? true : false;
  return {
    plugins: [
      new vueLoaderPlugin(),
      new htmlPlugin({
        filename: "index.html",
        template: "./src/index.html"
      })
    ],
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: util.cssLoaders({
          usePostCSS: true,
          extract: isProd,
          sourceMap: isProd
            ? config.build.cssSourceMap
            : config.dev.cssSourceMap
        })
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
          // name: "/static/img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
          // name: "/static/media/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000
          // name: "/static/fonts/[name].[hash:7].[ext]"
        }
      }
    ].concat(
      util.styleLoaders({
        usePostCSS: true,
        extract: isProd,
        sourceMap: isProd ? config.build.cssSourceMap : config.dev.cssSourceMap
      })
    )
  };
};
