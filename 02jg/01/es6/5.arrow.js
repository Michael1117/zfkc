/*
* 箭头函数
* 1.声明函数 更简单的方法
* */

/*
let sum = function (a,b) {
    return a + b
};
*/
/*let sum = (a,b) => {
    return a + b;
}*/
/*let sum = (a,b) => a+b

console.log(sum(1, 3));*/


// 如果有且只有 一个参数 可以省略小括号
// 如果只有返回值 没有函数体代码 可以省略{}


/*
let double = n => n * 2;

console.log(double(2));*/


/*let obj = {
    name: 'Jack',
    getName() {
        var that = this;
        setTimeout(function () {
            console.log(that.name);
        },0)
    }
}*/

/*
let obj = {
    name: 'Jack',
    getName() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000)
    }
}

obj.getName();*/

let obj8 = {
    name: 'Jack',
    getName: () => {
        console.log(this.name);
    }
}

obj8.getName()
// /*
// let obj9 = {
//     name: 9,
//     gN: obj8.getName
// }
//
// obj9.gN();*/
