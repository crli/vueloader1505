const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: "production",
  entry: {
    app: path.join(__dirname, "src/index.js")
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      //this will apply to both plain .js files
      //AND <script> blocks in vue files
      // {
      //     test: /\.js$/,
      //     loader: 'babel-loader'
      // }
      //this will apply to both plain .css files
      //AND <style> blocks in vue files
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
