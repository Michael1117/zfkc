//let Promise = require('./6.promise');


new Promise((resolve, reject) => {
  setTimeout(()=> {
      
    Math.random() < 0.5 ? resolve(100) :
    reject(-100)
  },1000)
  throw new Error('ERROR')
}).then(result => {
    console.log(result)
    //console.log(1)
}, reason => {
    console.log("NO " + reason)
    //console.log(2)
})

console.log(3)