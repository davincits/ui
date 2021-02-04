const path = require("path");
const webpack = require("webpack");

module.exports = (arg, { mode }) => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.svg$/,
          exclude: /node_modules/,
          loader: "url-loader",
        },
      ],
    },
    entry: {
      index: "./demo/index.js",
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle.js",
    },
    devServer: {
      contentBase: path.resolve(__dirname, "./dist"),
    },
  };
};
