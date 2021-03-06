/*
let name = 'Jack';

let age = 9;
// 对象的属性名 和变量名如果一样的话可以二合一
//let obj = {name: name, age: age};
let obj = {name, age}
console.log(obj);*/


let obj1 = {
    age:1,
    getFood() {
        return '面包'
    }
}

let obj2 = {age:2}

let obj3 = {
    __proto__: obj1,
    getFood() {
        // super 可以调用父类的方法
        return '牛奶' + super.getFood();
    }
}
// obj3继承obj1

// 设置obj3 的原型为obj1
/*Object.setPrototypeOf(obj3, obj1)
obj3.__proto__ = obj1;

let obj3 = {
    __proto__: obj1
}*/
console.log(obj3.age, obj3.getFood());