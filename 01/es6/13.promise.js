let Promise1 = require('./Promise');

let p1 = new Promise1(function (resolve, reject) {
    // pending
    //throw Error('出异常了');
    setTimeout(function () {
        let num = Math.random();
        console.log(num);
        if(num > .5) {
            resolve('大成功')
        }else {
            reject('小失败')
        }
    },1000)
});

// 成功回调后的值会被用来resolve 当前的promise
// 成功的回调里又返回了一个新的promise
// 成功的回调里返回的promise 还不是自己写的Promise

// 如果成功的回调列返回了一个promise  ,那么promise2要以promise
//的resolve结果来resolve自己
let p2 = p1.then(function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            //resolve(data + 100)
            resolve(new Promise(function () {
                setTimeout(function () {
                    resolve(data + 100)
                },1000)
            }))
        }, 100)
    })
})

p2.then(function (data) {
    console.log('p2成功', data);
},function (err) {
    console.log('p2失败', err);
})