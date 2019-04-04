//let Promise = require('./6.promise');


new Promise((resolve, reject)=> {
    resolve(100);

    reject(200)
}).then(result => {
    console.log(result)
    console.log(1)
    //return 1000
    throw new Error('Error')
}, () => {
    console.log(2)
}).then(result => {
    console.log(result)
}, reason=> {
    console.log(reason)
})