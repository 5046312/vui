const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: {
        main: './example/main',
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.join(__dirname, '../example/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vui: '../../src/index',
            vue: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
            { test:/\.scss$/, use:['style-loader','css-loader','sass-loader'] },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
        ]
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../example/dist/index.html'),
            template: path.join(__dirname, '../example/index.html')
        })
    ]
}