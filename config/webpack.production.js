const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
        minimizer: [
            new CssMinimizerPlugin({
                exclude: /node_modules/,
                parallel: true,
            }),
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ]
})