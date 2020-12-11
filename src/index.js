// // console.log('ok');

// import m1, { s1, s2 as ss2, say } from './m1'  // 其中m1是默认导出的成员, 花括号中的是按需导出的成员. Note: 如果使用别名, 就只能使用成员的别名

// // 打印默认导出的成员
// console.log(m1)

// // 打印按需导出的成员
// // console.log(s1, s2, say);
// console.log(s1, ss2, say);
// say();

// // 上面控制台输出结果:  // 控制台, 执行命令: npx babel-node  .\src\index.js
// // { a: 10, c: 20, show: [Function: show] }
// // aaa bbb [Function: say]
// // Oops...

// -------------------------------------------分割线--------------------------------------
// lesson 6 直接导入并执行模块代码
import './m2'

// 输出:
// 0
// 1
// 2
