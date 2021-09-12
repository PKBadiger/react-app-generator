/* eslint-disable no-console */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const envConfig = (mode) => require(`./config/webpack.${mode}`);

const progressHandler = (percentage, message, ...args) => {
  console.clear();
  console.log('Build Percentage', Math.round(percentage * 100), '%');
  console.log(message);
  console.log(args);
};

module.exports = (env, args) => {
  const { mode } = args;
  console.log(`Mode is ${mode}`);
  // console.log(typeof envConfig(mode)())
  return merge(
    {
      mode,
      entry: {
        bundle: path.resolve(__dirname, './src/index.js'),
      },
      output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'Build'),
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(jpg|jpeg|gif|png)$/,
            use: [
              {
                loader: 'url-loader',
                // other option goes here
              },
            ],
          },
        ],
      },
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './static/index.html'),
        }),
        new webpack.ProgressPlugin(progressHandler),
      ],
    },
    envConfig(mode)(),
  );
};
