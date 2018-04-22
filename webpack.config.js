const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
    filename: 'index.html',
    template: `${__dirname}/src/template.html`,
  })],
  devServer: {
    historyApiFallback: true,
    contentBase: './build',
    hot: true,
  },

};
