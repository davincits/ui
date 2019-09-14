const path = require('path');

module.exports = {
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
        test: /\.scss$/i,
        use: [
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
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
    libraryTarget: 'umd2'
  }
};