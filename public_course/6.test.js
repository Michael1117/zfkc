//let Promise = require('./6.promise');

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(100)
    })
}, 50)

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(200)
        reject(200)
    })
}, 10)

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(300)
    })
}, 90)

Promise.all([p1, p2 ,p3]).then(result => {
    // 所有的promise都成功执行，result
    
    console.log(result)
}).catch(reason => {
    console.log(reason)
})