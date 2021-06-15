/* eslint-disable */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/env",
              "@babel/react",
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        loader: "url-loader",
      },
    ],
  },
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname),
    libraryTarget: "umd",
  },
  externals: ["react", "react-dom"],
};
