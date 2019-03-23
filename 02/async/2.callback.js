/*
* 回调函数的问题
* 1 无法捕获错误  try catch
* 2 无法return
*
* */

/*function read(filename) {
    fs.readFile(filename, 'utf8', function (err, data) {
        throw Error('出错了')
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })
}*/

/*
* try 的时候错误没有发生
* 错误发生的时候  try 已经执行完了
*
* */

/*
try {
    read('./1.txt')
}catch (e) {
    console.log('err', e);
}*/

/*
* 如何解决这个回调函数嵌套的问题
* 1. 通过事件发布订阅来实现
* 这是node核心模块中的一个类 通过它可以创建事件发射器的实例，里面有两个核心方法 一个叫on emit ,on 表示注册监听
* emit表示发射事件
* */

//let EventEmitter = require('events');
let fs = require('fs')
//let eve = new EventEmitter()

// 这个html对象存放最终数据
//let html = {}
// 监听数据 获取成功事件 ， 当事件发生之后调用回调函数
/*eve.on('ready', function (key, value) {
    html[key] = value

    if(Object.keys(html).length === 2) {
        console.log(html);
    }
})*/

// 通过一个哨兵函数来处理
/*function done(key, value) {
    html[key] = value;
    if(Object.keys(html).length === 2) {
        console.log(html);
    }
}*/
function render(length, cb) {
    let html = {};
    return function (key, value) {
        html[key] = value;
        if(Object.keys(html).length === length) {
            console.log(html);
            cb(html)
        }
    }
}
let done = render(3, function (html) {
    console.log(html);
});

fs.readFile(__dirname + '/template.txt', 'utf8', function (err, template) {
    // 1事件名 2参数往后是传递给回调函数的参数
    //eve.emit('ready', 'template', template)
    console.log(template);
    done('template', template)
})

fs.readFile(__dirname + '/data.txt', 'utf8', function (err, data) {
    //eve.emit('ready', 'data', data)
    done('data', data)
})

fs.readFile(__dirname + '/resource.txt', 'utf8', function (err, resource) {
    //eve.emit('ready', 'data', data)
    done('resource', resource)
})

fs.readFile(__dirname +'/data.txt', 'utf8', (err, data) => {
    if(err) {
        throw err
    }
    console.log(data);
})
