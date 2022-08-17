const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};