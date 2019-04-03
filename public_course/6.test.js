let Promise = require('./6.promise');


let p1 = new Promise((resolve, reject) => {
  setTimeout(()=> {
      
    Math.random() < 0.5 ? resolve(100) :
    reject(-100)
  },1000)
})

console.log(p1 instanceof Promise)
let p2 = p1.then(result => {
   return result + 100
}, reason => {
    //throw new Error('new Error')
    return reason + 100;
})

console.log(p2 instanceof Promise)
/* let p3 = p2.then(result=> {
    //console.log(p1 === p2) // false 执行then 返回的是一个新的 promise实例
    //console.log(result)
}, reason => {
    //console.log(reason)
})
 */
//console.log(p3)

//console.log(3)