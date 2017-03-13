const {resolve} = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),
    devtool: 'eval',
    devServer: {
        hot: false,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                use: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader'
                ]
            }
        ]
    }
};
