// 定义一个类
/*
* 以前JS里类和构造函数 是一体的
* 类里可以定义构造函数
* 当你创建一个类的实例的时候就会调用构造函数
* */
class Parent {
    constructor(name){
        this.name = name;   // 实例的私有属性
    }
    // 静态属性是类的属性
    static hello() {

    }
    getName() {  // 实例的公有属性 也就相当于原型上的属性
        console.log(this.name);
    }
}

class Child extends Parent{
    constructor(name, age) {
        // super 指的是父类的构造函数
        super(name);
        this.age = age;
    }

    getAge() {
        console.log(this.age);
    }
}

/*
let p = new Parent('Jack');

p.getName()*/


Object.create = function (prototype) {
    // 先创建一个空的函数
    function Fn() {

    }
    Fn.prototype = prototype;
    // 返回这个函数的实例
    return new Fn();

}