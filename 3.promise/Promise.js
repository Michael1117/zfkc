//https://promisesaplus.com/
const PENDING = 'pending'  // 初始态
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected'

function Promise(executor) {
    let self = this; // 先缓存当前promise 实例
    self.status = PENDING; // 设置状态

    // 定义存放成功的回调的数组
    self.onResolvedCallbacks = []
    // 定义失败回调的数组
    self.onRejectedCallbacks = []
    // 当调用此方法的时候  如果promise状态为pending 则转化为成功态
    // 如果是成功态或者失败态的话 则什么也不做
    // 2.1
    function resolve(value) { // 2.1.1
        if(self.status === PENDING) {
            self.status = FULFILLED
            self.value = value // 成功会得到一个值 这个值不能改
            // 调用所有成功的回调
            self.onResolvedCallbacks.forEach(cb =>
                cb(self.value))
        }
    }

    function reject(reason) { // 2.1.2
        // 如果是初始态 则转成失败态
        if(self.status === PENDING) {
            self.status = REJECTED
            self.value = reason
            self.onRejectedCallbacks.forEach(cb =>
                cb(self.value))
        }
    }

    try {
        executor(resolve, reject)
    }catch (e) {
        //如果这个函数执行失败了 则用失败的原因reject这个promise
    }
}

//onFulFilled  是用来接收promise成功的值或者失败的原因
// 第2部
Promise.prototype.then = function (onFulFilled, onRejected) {
    // 如果成功和失败的回调没有传 则表示这个then没有任何逻辑 只会把值往后抛
    // 2.2.1
    onFulFilled = typeof onFulFilled == 'function' ? onFulFilled: value=>value;
    onRejected = typeof onRejected == 'function' ? onRejected :reason=>{throw reason}

    // 如果当前的promise 状态已经是成功态了 onFulfilled直接取值
    let self = this;
    let promise2;
    if(self.status === FULFILLED) {
        return promise2 = new Promise(function (resolve, reject) {
            try{
                let x = onFulFilled(self.value);
                /*if(x instanceof Promise) {


                }*/
                // 如果获取到了返回值x 会走解析promise的过程
                resolvePromise(promise2, x, resolve, reject)
            }catch (e) {
                // 如果执行成功的回调过程中出错了  用错误原因把promise2reject
                reject(e)
            }

        })

    }

    if(self.status === REJECTED) {
        try{
            let x = onRejected(self.value)
            resolvePromise(promise2, x, resolve, reject)
        }catch (e) {
            reject(e)
        }

    }

    if(self.status === PENDING) {
        self.onResolvedCallbacks.push(function () {
            try{

            }catch (e) {

            }
            let x = onFulFilled(self.value)
            resolvePromise(promise2, x, resolve, reject)
        })
        self.onRejectedCallbacks.push(function () {
            try{

            }catch (e) {

            }
            let x = onRejected(self.value)
            resolvePromise(promise2, x, resolve, reject)
        })
    }
}

module.exports = Promise;