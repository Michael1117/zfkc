// 判断一个参数是否是字符串

/*
function isString(param) {
    return Object.prototype.toString.call(param) == '[object String]'
}

// 判断一个参数是否是数组

function isArray(param) {
    return Object.prototype.toString.call(param) == '[object Array]'
}

console.log(isString({}));

console.log(isArray([]));*/

// 函数可以作为返回值
/*
function isType(type) {
    return function (param) {
        return Object.prototype.toString.call(param) === `[object ${type}]`
    }
}

let isString = isType('String');
let isArray = isType('Array')
console.log(isString("ww"));

console.log(isArray([]));
*/

// lodash after 指定一个函数被调用多少次才会真正执行

// 函数可以作为 参数传到另一个函数里面
function eat() {
    console.log('吃完了');
}

function after(times, fn) {
    let count = 0;
    return function () {
        if(++count === times) {
            fn()
        }
    }
}

let newEat = after(3,eat);

newEat()
newEat()
newEat()