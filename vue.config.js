const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
    baseUrl: './',
    outputDir: 'docs',
    // 配置路径别名
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('example'))
        config.module.rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => ({
                ...options,
                compilerOptions: {
                    ...options.compilerOptions,
                    preserveWhitespace: true,
                },
            }));
    },
    pages: {
        index: {
            entry: 'example/main.js',
        },
    }
}