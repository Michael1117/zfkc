/*
* // 方法的作用
*  方法的参数
*  方法的返回值
*  原有数组是否改变
* */

/*var arr = [12,23, 34];

console.dir(arr)
var res = arr.push(100)

var res2 = arr.push(100, {name: 'xxx'})

console.log(res,res2);

console.log(arr);*/

/*pop
* 作用: 删除数组最后一项
* 参数: 无
* 返回： 被删除的那一项
* 原有数组改变
* */

/*
var arr = [12,23,34];

var res = arr.pop()

console.log(res);

console.log(arr);
*/

/*
* shift
* 作用: 删除数组的第一项
* 参数: 无
* 返回: 被删除的那一项内容
* 原有数组改变
* */

/*var arr = [12,23,34];

var res = arr.shift();

console.log(res, arr);*/


/*
* unshift
* 作用: 向数组开始位置追加新内容
* 参数: 要新增的内容
* 返回: 新增后数组的长度
* 原有数组被改变
* */

/*
var arr = [12, 23, 34];

var res = arr.unshift(10);

console.log(res, arr);*/


/*
* splice
* 基于splice 可以对数组进行很多的操作: 删除指定位置的内容、向数组指定位置添加内容
* 还可以修改指定位置的消息
*
* 删除: ary.splice(n, m)
* 从索引n开始 删除m个内容 把删除的部分以一个新数组返回  原有数组改变
*
*
*
* */

//var arr = [12,23,34,45,56,67,78,89,99,100];

/*
var res = arr.splice(2,3)

console.log(res, arr);*/

/*
var res = arr.splice(100);

console.log(res, arr);*/

/*
var arr = [12,23,34,45,56,67,78,89,99,100];

var res = arr.splice(2,3, 'O(∩_∩)O哈哈~');

console.log(res);
console.log(arr);*/

/*var arr = [12,23,34,45,56,67,78,89,99,100];

var res = arr.splice(2,0, 10, 11,12, '哈哈');

console.log(res, arr);*/


//var arr = [12,23,34,45,56,67,78,89,99,100];

/*arr.pop()*/
/*arr.length --*/
/*arr.splice(arr.length-1)
console.log(arr);*/

//arr.push(111)
/*arr[arr.length] = 111*/
/*arr.splice(arr.length, 0 ,111)
console.log(arr);*/

/*
* slice
* 作用: 在一个数组中 按照条件查找出其中的部分内容
* 参数: 两个参数(n/m), 从索引n 开始 找到索引m处 但是不包含m
* 返回: 以一个新数组存储查找的内容
* 原有数组不会变
* */

//var arr = [12,23,34,45,56,67,78,89,99];

//console.log(arr.slice());

//console.log(arr.slice(2, 7));

//console.log(arr);
/*
console.log(arr.slice(-3, -1));

console.log(arr.slice(-1, -3));
*/


/*
* concat
* 作用: 实现多个数组(或者值)的拼接
* 参数 数组或者值
* 返回 拼接后的新数组
* 原有数组不变
* */

/*var arr1 = [12,23];
var arr2 = [100, 200];
var arr3 = [1000, 2000];*/

//console.log(arr1.concat(arr2, '珠峰', arr3));

//var res = arr1.concat(arr2, '珠峰', arr3)
//console.log(res);

/*
var res = [].concat(arr1,'O(∩_∩)O哈哈~', arr2, arr3)

console.log(res);*/

/*var arr = [12,23,34,45];

var res = arr.join()

console.log(typeof res,res);

var res2 = arr.join('+');
console.log(res2);

console.log(eval(arr.join('+')));*/


/*
* reverse
* 作用: 把数组倒过来排列
* 参数: 无
* 返回：排列后的新数组
* 原有数组改变
* */

/*
var arr = [12,23,34,45]

console.log(arr.reverse());

console.log(arr);*/


/*
* sort
* 作用 给数组排序
* 参数 无/ 函数
* 返回 排序后的新数组
* 原有数组改变
* */

/*
var arr = [1,2,11,2,45,3,32, 23];

var res = arr.sort(function (a,b) {
    return a - b;
})

console.log(res);

console.log(arr);*/


/*var arr = [12,34,33,100,23,5,6];

//console.log(arr.indexOf(12));

console.log(arr.lastIndexOf(34));

console.log(arr.includes(12));*/
var obj = {
    a: 12
}

console.log(obj.valueOf());
//console.log(arr.values());
