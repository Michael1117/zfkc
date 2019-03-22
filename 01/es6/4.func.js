/*
* 函数
* */

// 1 默认参数

// 1 必填项不填报错 2.有些参数没有给传参的话 可以有默认值图灵程序设计丛书
//
/*
function ajax(url=new Error('url不能为空'), method = 'GET', dataType = 'json') {
    console.log(url);
    console.log(method);
    console.log(dataType);

}

ajax('/user')*/


let arr4 = [1, 2, 3];

// 可以传一个参数 也可以传二个参数

// 第二个参数 表示初始值
// 上一次执行结果会成为下一次的初始值

/*
let result = arr4.reduce(function (val, item, index, origin) {
    //console.log(val, item, index, origin);
    //console.log(origin.length);
    let sum = val + item;    // 返回值会成为下一次函数执行的时候的val
    if (index === origin.length - 1) {
        return sum / origin.length;
    } else {
        return sum
    }
}, 0)

console.log(result);*/

/*

let result = arr4.reduceRight(function (val, item ,index, origin) {
    console.log(val, item, index);
    let sum = val + item;
    return sum
},0)

console.log(result);*/

//
/*
Array.prototype.reduce1 = function(reducer, initialVal) {
    for(let i = 0; i< this.length; i++) {
        initialVal = reducer(initialVal, this[i]);
    }
    return initialVal
}
Array.prototype.reduceRight1 = function(reducer, initialVal) {
    for(let i = this.length -1 ; i >= 0; i--) {
        initialVal = reducer(initialVal, this[i], i, this);
    }
    return initialVal
}

let result = arr4.reduceRight1(function (val, item, index, origin) {
    console.log(val, item, index, origin);
    return val + item;
}, 0)

console.log(result);*/

// 展开运算符  相当于把数组中的每个元素 依次取出放在这

/*
let arr5 = [1,2,3];

let arr6 = [4,5,6];

//let arr7 = [].concat(arr5, arr6)
let arr7 = [...arr5, ...arr6];


console.log(arr7);
*/

//let arr8 = [4,5,6]
//let max = Math.max(1,2,3)

//console.log(max);

//let max = Math.max.apply(null, arr8)

// let max = Math.max(...arr8)
// console.log(max);

/*let obj1 = {name: '1'};

let obj2 = {age: 2}

let obj3 = {};

for(let key in obj1) {
    obj3[key] = obj1[key]
}

for(let key in obj2) {
    obj3[key] = obj2[key]
}

console.log(obj3);*/

/*let obj1 = {name: '1'};

let obj2 = {age: 2}
let obj3 = {}
Object.assign(obj3, obj1, obj2)

console.log(obj3);*/


let obj1 = {name: '1'};

let obj2 = {age: 2}
let obj3 = {}
/*
* 对象解构
* */

obj3 = {...obj1, ...obj2}

console.log(obj3);
