class Observer {
    constructor(data) {
        this.observe(data)
    }

    observe(data) {
        // 要对这个 data 数据将原有的属性改成 set 和 get 形式
        if(!data || typeof data !== 'object') {
            return;
        }
        // 要将数据 一一劫持 先获取到data的key  和value
        //console.log(Object.keys(data));
        Object.keys(data).forEach(key => {
            // 劫持
            /*
            * 参数1 哪个数据
            * 参数2 定义谁
            * 参数3 定义的值
            * */
            this.defineReactive(data, key, data[key])
            this.observe(data[key])  // 深度递归劫持
        })
    }
    // 定义响应式
    /*
     * 参数1 哪个数据
     * 参数2 定义谁
     * 参数3 定义的值
     */
    defineReactive(obj, key, value) {
        // 在获取某个值得时候 想弹个框
        let that = this;
        let dep = new Dep();  //每个变化的数据 都会对应一个数组 这个数组是存放更新的操作
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() { // 当取值时 调用的方法
                console.log(1);
                Dep.target && dep.addSub(Dep.target)
                return value;
            },
            set(newValue) {
                if (newValue !== value) { // 当给data 属性中设置的时候 更改获取的属性的值
                    // 这里的this 不是 实例 vm.message
                    that.observe(newValue);  // 如果是对象 继续劫持
                    value = newValue
                    dep.notify(); // 通知所有人数据更新了
                }
            }
        })
    }
}

class Dep {
    constructor() {
        // 订阅的数组
        this.subs = []
    }

    addSub(watcher) {
        this.subs.push(watcher)
    }

    notify() {
        this.subs.forEach(watcher=>watcher.update())
    }
}