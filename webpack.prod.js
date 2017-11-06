const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
  devtool: "source-map",
  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    })
  ]
});
