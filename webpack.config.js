const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-react', 'babel-preset-env']
          }
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};