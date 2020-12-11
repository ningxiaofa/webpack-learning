<!-- 文件内容基本同 ../README.md -->
    学习记录
    视频资源: https://www.bilibili.com/video/BV15D4y1d7fF

    0.初始化项目
        0.1 git init // 创建.git文件, 添加版本控制.
        0.2 创建.gitignore文件, 添加排除非加入版本控制的文件目录.
        0.3 npm init -y // 创建package.json文件, 前端项目模块描述文件.
        0.4 创建README.md文件, 记录过程[笔记](https://github.com/ningxiaofa/webpack-learning)

    1.模块化相关规范
        1.1 模块化概述
        传统开发模式的主要问题:
            ① 命名冲突
            ② 文件依赖

        通过模块化解决上述问题
        -- 模块化就是把单独的一个功能封装到一个模块(文件)中, 但是可以通过特定的接口公开内部成员, 也可以依赖别的模块.
        -- 模块化开发的好处: 方便代码的重用, 从而提升开发效率, 并且方便后期的维护.

        1.2 浏览器端模块化规范
            1. AMD
            require.js(http://www.requirejs.cn/)

            2.CMD
            Sea.js(https://seajs.github.io/seajs/docs)

            Note:
            这两种模块化规范已经落伍, 有了更好的替代方案, 不推荐使用!

        1.3 服务器端模块化规范
            1. CommonJS
            ① 模块分为单文件模块与包
            ② 模块成员到处: module.exports 和 exports.
            ③ 模块成员导入: require('模块标识符')

        1.4 大一统的模块化规范 -- ES6模块化
            在ES6模块化规范诞生之前, JavaScript社区已经尝试并提出了AMD, CMD, CommonJS等模块化规范.
            但是, 这些社区提出的模块化标准, 还是存在一定的差异性与局限性, 并不是浏览器与服务器通用的模块化标准,
            例如:
                -- AMD 和 CMD 社用于浏览器端的JavaScript模块化
                -- CommonJS 适用于服务器端的JavaScript模块化
            因此, ES6 语法规范中, 在语言层面上定义了ES6模块化规范, 是浏览器端与服务器端通用的模块化开发规范.

            ES6模块化规范中定义:
            -- 每个js文件都是一个独立的模块
            -- 导入模块成员使用 import 关键字
            -- 暴露模块成员使用 export 关键字

        1.5 Node.js中通过 babel 体验ES6模块化
        -- NodeJS中默认支持CommonJS服务器端的模块化规范, 但是, NodeJS对ES6模块化规范支持不是很好, 需要结合babel这个第三方插件在NodeJS中体验高级的ES6特性.
        -- babel是一个语法转换工具, 可以将高级的, 有兼容性的JavaScript代码转换为低级的, 没有兼容性的JavaScript代码

            1.5.1 配置:
            ① npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node
            ② npm install --save @babel/polyfill
            ③ 项目根目录创建文件 babel.config.js
            ④ babel.config.js文件内容如下代码:
                const presets = [
                    ["@babel/env", {
                        targets: {
                            edge: "17",
                            firefox: "60",
                            chrome: "67",
                            safari: "11.1"
                        }
                    }]
                ];
                module.exports = { presets };
            ⑤ 通过 npx babel-node ./src/index.js 执行代码
            
            Note:
            -- npm install --save-dev / --save some-package-name // 可以简写: npm i -D / -S some-package-name 
            -- npx默认在高版本的npm中就默认提供了, 可以直接通过npx运行某些cli命令.
            -- npx babel-node ./src/index.js 意味着有些代码可以直接通过, node ./src/index.js 直接运行, 但是有些, 直接使用node运行会报错.

        1.6 ES6模块化的基本语法
            1. 默认导出 与 默认导入
            -- 默认导出语法 export default 默认导出的成员
            例如:
                // 当前的文件模块为 m1.js

                // 定义私有成员 a 和 c
                let a = 10
                let c = 20
                //外界访问不到变量d, 因为它没有被暴露出去
                let d = 30
                function show() {}

                // 将本模块中的私有成员暴露出去, 供其他模块使用
                export default {
                    a,
                    c,
                    show
                }

                // Note:
                // 每个模块中, 只允许使用唯一的一次export default, 否则会报错.
                // 如果没有导出[export], 则默认导出空对象 {}

                -- 默认导入语法 import 接收名称 from '模块标识符'
                例如:
                    // 导入模块成员
                    import m1 from './m1/js'

                    console.log(m1)
                    // 打印输出的结果为:
                    // { a: 10, c: 20, show: [Function: show] }
        
                2. 按需导出 与 按需导入
                -- 按需导出语法 export let s1 = 10
                -- 按需导入语法 import { s1 } from '模块标识符'

                // 当前文件模块为 m1.js
                    // 向外按需导出变量 s1,
                    export let s1 = 'aaa'
                    // 向外按需导出变量 s2
                    export let s2 = 'ccc'
                    // 向外按需导出方法 say
                    export function say = function() {}

                // 导入模块成员
                    import m1, { s1, s2 as ss2, say } from './m1'
                    console.log(s1); // aaa
                    console.log(s2); // ccc
                    console.log(say); // [Function: say]
                
                Note:
                每个模块中, 可以使用多次按需导出.

                3. 直接导入并执行模块代码
                有时候, 我们只是想单纯执行某个模块中的代码, 并不需要得到模块中向外暴露的成员, 此时, 可以直接导入并执行模块代码.

                // 当前文件模块为 m1.js
                    // 在当前模块中执行一个for循环操作
                    for (let i = 0; i < 3; i++) {
                        console.log(i)
                    }

                // 直接导入并执行模块代码
                import './m2'

    2. webpack
        2.1 当前Web开发面临的困境
        -- 文件依赖关系错综复杂
        -- 静态资源请求效率低
        -- 模块化支持不友好
        -- 浏览器对高级JavaScript特性兼容程度较低
        -- etc...

        webpack概述
        官网: https://webpack.js.org/ 
        webpack是一个流行的 前端项目构建工具(打包工具), 可以解决当前web开发中面临额困境.
        webpack提供了友好的模块化支持, 以及代码压缩混淆, 处理js兼容问题, 性能优化等强大的功能, 从而让程序员把工作的重心放到具体的功能实现上,
        提高了开发效率与项目的可维护性.

        目前绝大多数企业中的前端项目, 都是基于webpack进行打包构建的.
        功能图参见:
        https://webpack.js.org/

        在该图中:
        中间表示webpack, 即webpack的logo,
        左侧表示经过webpack打包之前的项目状态,
        右侧表示经过webpack打包之后的项目状态.

        可以看到:
        打包之前的项目文件依赖关系错综复杂, 文件较多, 体积较大, 性能不是很好.
        经过webpack打包之后, 输出一个打包构建好的新项目, 文件之间依赖关系就不再错综复杂, 同时合并文件, 处理兼容性问题, 以及做了一些性能优化.

        总结:
        webpack在前端项目开发起到的作用: webpack提供了友好的模块化支持, 以及代码压缩混淆, 处理js兼容问题, 性能优化等强大的功能. [即概述中的内容]

        2.2 webpack的基本使用
            1. 创建列表的隔行变色项目
            ①  创建项目空白目录, 并运行 npm init -y 命令, 初始化包管理配置文件, package.json
            ②  新建 src 源代码目录
            ③  新建 src -> index.html 首页
            ④  初始化首页基本的结构
            ⑤  运行 npm i jquery -S 命令, 安装jQuery

            Note:
            这里新建一个webpack-real-learning目录, 作为学习实践webpack的项目根目录.
            即: webpack-real-learning 可作为一个单独的项目.

            2. 在项目中安装和配置 webpack
            ①  运行 npm install webpack webpack-cli -D 命令, 安装 webpack 相关的包
            ②  在项目根目录中, 创建名为 webpack.config.js 的 webpack 配置文件
            ③  在 webpack 的配置文件中, 初始化如下基本配置:
                module.exprots = {
                    mode: 'development' // mode 用来指定构建模式 value: development | production, 
                    // 两者区别:
                    // 后者用于生产环境, 打包上线, 打包压缩混淆代码. 体积更小, 加载速度更快.
                    // 前者用于开发环境. 开发调试, 打包速度更快, 因为省去压缩混淆的步骤, 体积较大.
                }
            ④  在 package.json 配置文件中的 scripts 节点下, 新增 dev 脚本如下:
                "scripts: {
                    "dev": "webpack" // scripts 节点下的脚本, 可以通过 npm run 执行
                }
            ⑤  在终端中运行 npm run dev 命令, 启动 webpack 进行项目打包.
