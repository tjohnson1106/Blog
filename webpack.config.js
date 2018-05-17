const { resolve } = require("path");
const { HtmlWebpackPlugin } = require("html-webpack-plugin");

const srcDir = resolve(__dirname, "src");

module.exports = {
  entry: `${srcDir}/index.js`,
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()]
};
