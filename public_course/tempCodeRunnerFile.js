let p3 = p2.then(result=> {
    //console.log(p1 === p2) // false 执行then 返回的是一个新的 promise实例
    //console.log(result)
}, reason => {
    //console.log(reason)
})
