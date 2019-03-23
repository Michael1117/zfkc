//https://promisesaplus.com/
const PENDING = 'pending'  // 初始态

function Promise(executor) {
    let self = this; // 先缓存当前promise 实例
    self.status = PENDING; // 设置状态

    // 定义存放成功的回调的数组
    self.onResolvedCallbacks = []
    // 定义失败回调的数组
    self.onRejectedCallbacks = []

    function resolve() {

    }

    function reject() {

    }

    try {
        executor()
    }catch (e) {

    }
}