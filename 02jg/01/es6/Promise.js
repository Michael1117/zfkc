// 构造函数的参数 是一个异步任务
function Promise(task) {
    let that = this;  // 缓存this
    that.status = 'pending'; // 默认状态为pending
    // 调用此方法可以把当前promise 变成成功态

    that.value = null;  // 此变量里放着此promise的结果
    // 存放着所有成功的回调函数
    that.onResolvedCallbacks = [];
    // 存放着所有失败的回调函数
    that.onRejectedCallbacks = []
    // 调用此方法可以把promise 变成成功态
    // resolve 的时候把 挣到的钱传进来
    function resolve(value) {
        if(value instanceof Promise) {
            value.then(resolve, reject)
        }
        if (that.status === 'pending') {
            that.status = 'fulfilled';
            that.value = value;
            that.onResolvedCallbacks.forEach(item =>
                item(value))
        }
    }

    // 调用此方法可以把当前promise 变成失败态
    function reject(reason) {
        // 如果当前状态是初始态 则转成失败态
        if (that.status === 'pending') {
            that.status = 'rejected'
            that.value = reason;
            that.onRejectedCallbacks.forEach(item =>
                item(reason))
        }
    }

    // 立即执行传入的任务
    try {
        task(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

// 第3步

function resolvePromise(promise2, x, resolve, reject) {
    // 如果x 就是promise2 就死循环了
    let then;
    if (promise2 === x) {
        return reject(new TypeError('循环引用'))
    }

    if (x instanceof Promise) {
        if (x.status === 'pending') {
            x.then(function (y) {
                resolvePromise(promise2, y, resolve, reject)
            }, reject)
        } else if (x.status === 'fulfilled') {
            resolve(x.value);
        } else if (x.status === 'rejected') {
            reject(x.value)
        }
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        //then = x.then;
        try {
            then = x.then;
            if (typeof then === 'function') {
                then.call(x, function (y) {
                    resolvePromise(promise2, y, resolve, reject)
                }, reject)
            }
        } catch (e) {
            reject(e)
        }
    }else {
        resolve(x)
    }
}

// 第2步
// onFulfilled 成功的回调
// onRejected 失败的回调
Promise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : function(value) {
        return value
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function(reason) {
        throw reason;
    }
    let that = this;
    let promise2;
    if (that.status === 'fulfilled') {
        promise2 = new Promise(function (resolve, reject) {
            let x = onFulfilled(that.value);

            resolvePromise(promise2, x, resolve, reject);
        })
    }
    if (that.status === 'rejected') {
        //onRejected(that.value)
        promise2 = new Promise(function (resolve, reject) {
            let x = onReject(that.value);

            rejectPromise(promise2, x, resolve, reject);
        })
    }
    if (that.status === 'pending') {
        that.onResolvedCallbacks.push(onFulfilled);
        that.onRejectedCallbacks.push(onRejected)

        promise2 = new Promise(function (resolve, reject) {
            let x = onFulfilled(that.value);

            resolvePromise(promise2, x, resolve, reject);
        })
    }
}

module.exports = Promise;