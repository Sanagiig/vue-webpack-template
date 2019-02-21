const vueLoaderPlugin = require("vue-loader/lib/plugin");
const htmlPlugin = require("html-webpack-plugin");
module.exports = {
  plugins: [
    new htmlPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new vueLoaderPlugin()
  ],
  rules: [
    {
      test: /\.vue$/,
      use: "vue-loader"
    },
    {
      test: /\.js$/,
      use: "babel-loader",
      exclude: "/node_modules/"
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.scss$/,
      use: "scss-loader"
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }
  ]
};
