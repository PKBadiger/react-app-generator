const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    optimization: {
        
            splitChunks: {
                cacheGroups: {
                    defaultVendors: {
                        test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
                    }
                }
            },
        
        minimizer: [
            new CssMinimizerPlugin({
                exclude: /node_modules/,
                parallel: true,
            }),
            new TerserWebpackPlugin({
                parallel: true,
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                    compress: {
                        drop_console: true,
                    }
                }
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ]
})