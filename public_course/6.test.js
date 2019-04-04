let Promise = require('./6.promise');

let p1 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        
        /* Math.random < 0.5  ? resolve(100) : reject(-100) */
        resolve(100)
    }, 1000) 
})

let p2 = p1.then(result => {
    //throw new Error('Error')
    return result + 100 
})

let p3 = p2.then(null)

p3.then(result => {
    console.log(result)
    throw new Error('Error')
}, reason => {
    //console.log(reason)
}).catch(reason=>{
    console.log(reason)
})
console.log(3)