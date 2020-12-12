const path = require('path');
// 或者
// const { resolve } = require('path');

module.exports = {
    // 编译模式
    mode: 'development', // development | production
    entry: path.join(__dirname, './src/index.js'),
    // entry: resolve(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, './dist'), // 输出文件的存放路径
        filename: 'bundle.js' // 输出文件的名称
    }
}