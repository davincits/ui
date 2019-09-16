const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-react",
            ],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
    ]
  },
  entry: {
    index: './src/index.js',
    icons: './src/icons.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname),
    libraryTarget: 'umd2'
  }
};