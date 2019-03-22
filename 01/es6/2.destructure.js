/*
* 解构  分解一个对象的结构
* */

/*
let arr = [1, 2, 3];

/!*let a = arr[0];
let b = arr[1];
let c = arr[2];*!/
// 解构的时候  等号的两边结构类似  右边还必须是一个真实的值
let [a, b, c] = arr
console.log(a, b, c);*/


/*let arr2 = [{name: 'xx', age: 9}, [1, 2], 3];

//let [{name, age},[d,e], f] = arr2

let [json, arr3, f] = arr2;

console.log(json, arr3, f);*/
//console.log(name, age, d, e, f);

//let obj1 = {name: 'xxx', age: 9};

/*let {name: myName, age: myAge} = obj1


let myName = obj1.name;
let myAge = obj1.age;*/
//console.log(myName, myAge);


// 默认结构  如果能取出来值就用取出来的值   如果取不出来就用默认值
/*
let obj2 = {name: 'Jack',age: 9};

let {name, age = 8} = obj2;

console.log(name, age);*/


let arr4 = [1, 2, 3];

//let [h, i, j] = arr4;

// 省略赋值
let [,,j]  = arr4;
console.log(j);