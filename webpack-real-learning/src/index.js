import $ from 'jquery'
// 此时, 在浏览器中浏览 index.html, 样式并没有发挥作用, 打开浏览器开发者工具, 控制台, 发现如下报错:
// Uncaught SyntaxError: Cannot use import statement outside a module // 即 import 报错, 浏览器中对import语[ES6]法支持不是很好, 无法识别, 所以产生报错.
// 解决办法: 
// 使用webpack将这种有兼容性的代码, 转换为没有兼容性的代码. 在index.html中使用转换后的js文件

// webpack 可以不借助loader插件, 处理js/json文件
// import data from './data.json'
// console.log(data); // 控制台打印两次 ？ 因为: http://localhost:8080/src/ 与 http://localhost:8080

import './css/1.css'

$(function(){
    $('li:odd').css('background', 'pink')
    $('li:even').css('background', 'lightblue')
})