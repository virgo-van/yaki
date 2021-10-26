// npx webpack 构建
// webpack的配置是对象 执行构建会找webpack.config.js这个配置文件
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除打包文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack"); // 自带热模块替换

module.exports = {
    // 上下文 项目打包的相对路径 必须是绝对路径  一般是不会更改的
    // context: process.cwd(),
    // 单入口 执行构建的入口 项目入口  单文件是字符串 多文件是数组 ['xx.js','xxxx.js']
    entry: './src/index.js',
    // 多入口 entry 对象形式并且是多键值 对应多出口 output的 filename: '[name].js' 占位符,
    // entry: {
    //     aa: 'aa.js',
    //     bb: 'bb.js'
    // },
    // 出口
    output: {
        // 构建的文件资源放在那里？ 必须是绝对路径
        path: path.resolve(__dirname, './dist'),
        // 构建出来的文件资源叫啥？
        // filename: 'main.js',
        filename: '[name]-[hash:6].js', // 6代表6位最长20位 hash的目的是缓存
        // filename: '[name]-[chunkhash:6].js', // 6代表6位最长20位 一般是多入口 各自改动不会互相影响
        // publicPath: '//xxx.com', //指定存放 JS⽂件的 CDN地址 不会自动上传 cdn
    },
    // 常见占位符
    //hash
    //name[字符串的key 默认是main]
    //chunkhash 根据不同入口entry进行依赖解析，构建对应的chunk，生成对应的xx,只要entry的模块么没有内容改变hash不变
    //id
    // 配置模式  none development production' 生产环境会压缩 如果没有设置默认是 production
    mode: "development",
    // 处理不认识的模块
    module: {
        // loader 模块转换
        // 规则
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "./src"), // loader优化项 include指定文件夹查找  exclude 排除某个文件夹下
                // loader的执行顺序是从后往前 css-loader加到js模块中去 css in js方式
                // style-loader从js中提取css的loader在html中创建
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" }
                ]
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, "./src"), // 制定文件查找
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        modules: true
                    }
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }, { loader: "postcss-loader" }]
            },
            // 处理图片 ext 什么后缀名就是输出什么
            {
                test: /\.(png|jpg|gif)$/,
                include: path.resolve(__dirname, "./src"), // 制定文件查找
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:6].[ext]',
                            publicPath: 'assets/',
                            outputPath: 'images/'  // dist下面的目录下面
                        }
                    }
                ]
            },
            // 推荐 url-loader 因为它包含了 file-loader的所有功能 还支持 limit限定文件大小
            {
                test: /\.(png|jpg|gif)$/,
                include: path.resolve(__dirname, "./src"), // 制定文件查找
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'images/',  // dist下面的目录下面 下面这个打包后混合在打包后的js里面了
                            // 推荐小体积图片转成 base64 1024 = 1kb
                            limit: 12 * 1024
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "./src"), // 制定文件查找
                exclude: /node_modules/, // 排除 node_modules下面
                use: {
                    loader: "babel-loader",
                    // options可不在这边配置 项目根目录新建 .babelrc 文件丢进去即可
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        edge: "17",
                                        firefox: "60",
                                        chrome: "67",
                                        safari: "11.1"
                                    },
                                    corejs: 2, //新版本需要指定核⼼库版本
                                    useBuiltIns: "entry" //按需注⼊
                                }
                            ],
                            "@babel/preset-react", // 对jsx的支持
                        ]
                    }
                }
            },
        ]
    },
    // 配置模块解析
    resolve: {
        // 第三方依赖 node_modules 这里去查找
        modules: [path.resolve(__dirname, './node_modules')],
        // 别名 减少查找过程 起别名
        alias: {
            "@": path.resolve(__dirname, "./src/css"),
            react: path.resolve(
                __dirname,
                "./node_modules/react/umd/react.production.min.js"
            ),
            "react-dom": path.resolve(
                __dirname,
                "./node_modules/react-dom/umd/react-dom.production.min.js"
            )
        },
        // 去除后缀 不建议滥用最好带上后缀 减少查找时间
        extensions:['.js','.json','.jsx','.ts'],
    },
    // 配置这个cdn 的不需要打包到 bundle⽂件
    externals: {
        // jquery通过script引⼊之后，全局中即有了 $ 变量
        // 'jquery': '$',
        // 'loadsh': '_'
    },
    // 推荐配置
    // devtool:"cheap-module-eval-source-map",// 开发环境配置
    // devtool:"cheap-module-source-map", // 线上⽣成配置
    // 测试配置
    devtool: "none", // 把source-map 关闭 或者把 mode 设置为 production   设置为 source-map dist下会多一个map文件
    // webpack-dev-server的配置
    devServer: {
        hot: true, // 热模块替换配置
        //即便HMR没有生效，浏览器也不要自动刷新。
        hotOnly: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        open: true, // 自动打开浏览器
        port: 9000, // 端口
        // 代理 改了配置文件首先需要重启服务
        proxy: {
            "/api": {
                target: "http://localhost:9092"
            }
        },
        // 自带了express服务 mock server
        before(app, server) {
            app.get('/api/info', (req, res) => {
                res.json({
                    name: 'express返回结果',
                    age: 22,
                    msg: '欢迎来到express课程'
                })
            })
        }
    },
    // 插件
    plugins: [
        // webpack的output.path目录中的所有文件将被删除一次，但是目录本身不会。
        // 如果使用webpack 4+的默认配置，<PROJECT_DIR> / dist /下的所有内容都将被删除
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "首页",
            template: "./src/index.html",
            filename: "index.html",
            minify: {}, // 针对开发和生产压缩代码
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}