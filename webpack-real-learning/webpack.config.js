const path = require('path');
// 或者
// const { resolve } = require('path');

// 导入生成预览页面的插件, 得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({ // 创建插件的实例对象
    template: './src/index.html', // 指定要用到的模板文件
    filename: 'index.html' // 指定生成文件名称, 该文件存在于内存中, 在目录中不显示
});

module.exports = {
    // 编译模式
    mode: 'development', // development | production
    entry: path.join(__dirname, './src/index.js'),
    // entry: resolve(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: 'bundle.js' // 输出文件的名称
    },
    plugins: [ htmlPlugin ], // plugins 数组是 webpack 打包期间会用到的一些插件列表
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            { test:  /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            { test:  /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test:  /\.jpg|jpeg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=86058'},
        ]
    } 
}