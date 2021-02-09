module.exports = {
    //路径前缀
    productionSourceMap: false,
    publicPath: './',
    devServer: {
        port: 8080,
        proxy: {
            '^/': {
                target: 'http://47.100.172.107:80',
                ws: true,
            }
        }
    }
}
