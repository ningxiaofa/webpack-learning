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

// 每个模块中, 只能使用唯一一次默认导出.否则报错.
// SyntaxError:: Only one default export allowed per module.
// export default {
//     d
// }

// 按需导出, 一个模块中, 可以使用多次.
export let s1 = 'aaa'
export let s2 = 'bbb'
export function say() {
    console.log('Oops...');
}