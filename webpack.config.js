const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

const srcDir = resolve(__dirname, "src");

module.exports = {
  entry: `${srcDir}/index.js`,
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new DashboardPlugin()
  ]
};
