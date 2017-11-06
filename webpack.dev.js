const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "../dist"
  }
});
