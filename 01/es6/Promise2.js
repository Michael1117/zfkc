function Promise(task) {
    let that = this;  // 缓存this
    that.status = 'pending'; // 默认状态为pending
    that.value = undefined;  // 此变量里放着此promise的结果
    that.onResolvedCallbacks = [];
    that.onRejectedCallbacks = []
    function resolve(value) {
        if (that.status === 'pending') {
            that.status = 'fulfilled';
            that.value = value;
            that.onResolvedCallbacks.forEach(item =>
                item(value))
        }
    }
    function reject(reason) {
        if(that.status === 'pending') {
            that.status = 'rejected'
            that.value = reason;
            that.onRejectedCallbacks.forEach(item =>
                item(reason))
        }
    }
    try {
        task(resolve, reject)
    }catch (e) {
        reject(e)
    }
}
Promise.prototype.then = function(onFulfilled, onRejected) {
    let that = this;
    that.onResolvedCallbacks.push(onFulfilled);
    that.onRejectedCallbacks.push(onRejected)
}
module.exports = Promise;