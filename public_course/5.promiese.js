new Promise((resolve, reject) => {
    // => RESOLVE & REJECT 是自己任意指定的 但一般情况下都约定成功执行resolve，失败执行reject。

    resolve(100)
}).then(result =>{
    // => resolve 执行的时候会触发第一个回调函数执行
    console.log(1)
},reason => {
    // => reject 执行会触发第二个回调函数执行
    console.log(2)
}).then(result=> {
    console.log(4)
}, reason => {
    console.log(5)
})

console.log(3)