const path = require('path');

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader', 
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'Build'),
        open: true,
        
    }
})