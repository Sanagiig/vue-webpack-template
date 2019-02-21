const baseConfig = require("./base");

module.exports = {
  rules: baseConfig.rules,
  plugins: baseConfig.plugins,
  devServer: {
    contentBase: "./dist/",
    port: 9999,
    historyApiFallback: true,
    inline: true
  }
};
