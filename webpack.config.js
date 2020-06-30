const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = ({ mode } = {mode: 'production'}) => {
    console.log(`Mode is ${mode}`);
    return {
        mode,
        entry: {
            bundle: path.resolve(__dirname, './src/index.js')
        },
        output: {
            filename: '[name].[hash].bundle.js',
            path: path.resolve(__dirname, 'Build')
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, './static/index.html')})
        ]
    }
}