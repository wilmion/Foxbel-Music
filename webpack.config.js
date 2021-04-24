const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname , 'src/index.js'),
    output: {
        filename: 'js/[fullhash].js',
        path: path.resolve(__dirname , 'dist/'),
        publicPath: '/'
    },
    resolve: { extensions: ['.js' , '.jsx'] },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]',
                        outputPath: 'static/images/'
                    }
                }
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]',
                        outputPath: 'static/fonts/'
                    }
                }
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename: 'css/[fullhash].css',
            linkType: 'text/css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname , 'public/index.html')
        })
    ],
    devServer: {
        port: 8080,
        open:true,
        historyApiFallback:true
    }
}