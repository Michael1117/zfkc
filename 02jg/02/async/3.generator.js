/*
*
*
* */

// 生成器函数有一个特点  需要加个*
// 生成器有若干个阶段 任何划分这些阶段

function *go(a) {
    console.log(1);
    let b = yield a;
    b(3);
    console.log(2);
    let c = yield 'b';
    console.log(3);
    return c
}

// 生成器函数和普通的函数不同 调用它的话函数并不立刻执行
// 它会返回此生成器的迭代器 迭代器是一个对象 每调用一次next就可以返回一个值对象
let it = go(88);

let r1 = it.next();
console.log(r1);
//it.next('44')

let r2 = it.next(function (a) {
    console.log(a);
});
console.log(r2);
