const path = require("path");
const webpack = require("webpack");

module.exports = (arg, { mode }) => {
  const isProd = mode === "production";
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
        {
          test: /\.s?css$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    entry: {
      index: "./demo/index.js",
    },
    output: {
      path: path.resolve(__dirname, isProd ? "./build" : "./dist"),
      filename: "bundle.js",
    },
    devServer: {
      contentBase: path.resolve(__dirname, "./dist"),
    },
  };
};
