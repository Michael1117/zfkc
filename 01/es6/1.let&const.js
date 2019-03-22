/*
* var
* 1. 可以重复声明
* 2. 不能定义常量 var PI = 3.14
* 3. 不支持块级作用域 if(true){var a = 10;}
* */
/*
* 变量a 已经定义过了  不能重复声明
* */
/*
let a = 10;

let a = 20;

const PI = 3.14
// 试图给一个常量赋值 会报错
PI = 3;*/


/*
if(true) {
    let a = 10;
}

console.log(a);*/

// 以前JavaScript只有两个作用域，一个全局 一个函数
/*
;(function () {

})();

let a = 20;
{
    // a is not defined
    // let 没有预解析
    console.log(a);
    let a = 10;
}*/
/*
for(var i = 0;i<4;i++) {
    (function(j) {
        (setTimeout(function (i) {
            console.log(j);
        }),1000)
    })(i)
}
*/


/*
var loop = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}

for (var i = 0; i < 5; i++) {
    loop(i)
}
*/

/*
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function (i) {
            console.log(j);
        },1000)
    })(i)
}
*/

/*const PI = 3.14;

console.log(PI);*/

//PI = 100;

//虽然常量不能再引用别的对象了  但是它的值如果是一个引用类型的话 引用对象的属性还是可以修改的

/*
const USER = {name: 'zfpx'};

USER.name = 'zfpx2'

{
    const PI = 3
}
*/

// es6 中新增了两种声明变量的方式  可以解决以前var 的一些问题
