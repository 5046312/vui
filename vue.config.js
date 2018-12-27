const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
    // 配置路径别名
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('example'))
    },
    pages: {
        index: {
            entry: 'example/main.js',
        },
    }
}