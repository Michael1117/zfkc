let MyPromise = require('./Promise');

let p1 = new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        let num = Math.random();
        if (num < .5) {
            resolve(num)
        } else {
            reject('失败')
        }
    })
})

// 这个叫值的穿透
/*let p2 = p1.then(function (data) {
    return data
});*/

p1.then(function (data) {
    console.log(data);
    throw Error('成功回调出错了')
}, function (reason) {
    console.log(reason);
}).then(function () {
    console.log(data);
},function (reason) {
    console.log(reason);
})