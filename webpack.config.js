const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Virtual Keyboard",
            favicon: './src/favicon.ico'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|ico)$/i,
                type: 'asset',
              },
            {
                test: /\.js$/,
                exclude: /node-modules/,
            }
        ]
    },
    devServer: {
        port: 4200
    }
}

