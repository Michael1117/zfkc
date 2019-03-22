//let name = 'Jack', age = 9;

//let desc = name + "今年" + age + "岁了";
//console.log(desc);

// 模板字符串
/*
* 1. 字符串里可以嵌套变量
* 2.
*
* */
//let desc = `${name}今年${age}岁了`;

//console.log(desc);

// 模板字符串 自己实现

// 模板语言很多就是这样的原理
/*
let name = 'Jack', age = 9;
let desc = "${name}今年${age}岁了";

function replace(desc) {
    return desc.replace(/\$\{([^}]+)\}/g, function(matched, key){
        console.log(arguments);
        return eval(key)
    })
}

console.log(replace(desc));*/

/*
let users = [{id: 1, name: 'Jack'}, {id: 2, name: 'Rose'}]

// 映射 把老数组 里的每一个元素 映射为新数组的每一个元素

let newLis = users.map(function (user, index) {
    return `<li>${user.id}:${user.name}</li>`
}).join('')

let ul = (
    `<ul>${newLis}</ul>`
)

console.log(ul);*/


/*let name = 'Jack', age = 9;
function desc(strings, name, age) {
    console.log(strings);
    console.log(name);
    console.log(age);
}

// 带标签的模板字符串 就像一个函数调用 参数
// 1 参数是文本的数组
//
let str = desc`${name}今年${age}岁了`;*/

// 其他运算符  会把后面所有参数全都放在一个数组里

// rest 其它运算符只能作为
// 因为有些时候我们希望有自己的拼接模板字符串的逻辑
/*
let name = 'Jack', age = 9;
function desc(strings, ...values) {
    console.log(strings);
    console.log(values);
    let result = ''
    for(let i = 0; i < values.length; i++) {
        result += (strings[i] + values[i]);
    }
    result += strings[strings.length-1]
    return result.toUpperCase();
}

let str = desc`${name}今年${age}岁了`;

console.log(str);
*/

/*
let str3 = 'Hello World';

console.log(str3.startsWith('z'));
*/


/*
let address = 'http://www.baidu.com';

let address2 = 'ftp://www.baidu.com';

if(address.startsWith('http')) {
    console.log('http网址');
}else if(address2.startsWith('ftp')) {
    console.log('ftp服务器');
}

*/

/*
let filename=  'avatar.jpg';

if(filename.endsWith('jpg') || filename.endsWith('png')) {
    console.log('是一张图片');
}
*/

/*let content = 'abc';

console.log(content.includes('b'));*/


let x = 'xx';

console.log(x.repeat(3));

let str5 = '7';

