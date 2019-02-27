const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/vui.js'
    },
    output: {
        path: path.resolve(process.cwd(), './dist/'),
        filename: 'vui.min.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src')
        }
    },
    externals: {},
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new VueLoaderPlugin(),
    ]
};