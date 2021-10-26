module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",
    indexPath: "index.html",
    filenameHashing: true,
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'YakiUI',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    lintOnSave: false,
    runtimeCompiler: false,
    transpileDependencies: [ /* string or regex */ ],
    productionSourceMap: true,
    integrity: false,

    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: "http://app.rmsdmedia.com",
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            },
        },
    },
}
