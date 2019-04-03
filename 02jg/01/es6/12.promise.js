let Promise = require('./Promise');

let p1 = new Promise(function (resolve, reject) {
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

p1.then(function (value) {
    console.log('成功', value);
},function (reason) {
    console.log('失败', reason);
})