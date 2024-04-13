const path = require('path')
const HTML = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HTML({
            template: 'index.html',
            favicon: path.resolve(__dirname, 'src/public', 'favicon.ico')
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
        proxy: [
            {
                context: ['/'],
                target: 'http://localhost:4000'
            }
        ]
    }
}