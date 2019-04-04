let Promise = require('./6.promise');

new Promise((resolve, reject)=> {
    throw new Error('ERROR');
    setTimeout(() => {
        
        Math.random < 0.5  ? resolve(100) : reject(-100)
    }, 1000) 
}).then(result => {
    console.log(result) 
    //return result + 100 
}, reason => {
    console.log('NO',reason)
    //return reason + 100
})
console.log(3)