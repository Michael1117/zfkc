class Compile {
    constructor(el, vm) {
        this.el = this.isElementNode(el) ?
            el : document.querySelector(el)
        this.vm = vm;
        // 第1步
        if (this.el) {
            // 如果这个元素能获取到 我们才开始编译
            // 1.先把这些真实的DOM 移入到内存中  fragment
            let fragment = this.nodeToFragment(this.el)
            // 2.编译 => 提取想要的元素节点  v-model 和文本节点 {{}}
            this.compile(fragment)
            // 3.把编译好的fragment 再塞回页面里去
            this.el.appendChild(fragment)
        }
    }

    /*
    * 专门写一些 辅助的方法
    * */

    // 是不是元素节点
    isElementNode(node) {
        return node.nodeType === 1;
    }

    // 是不是指令
    isDirective(name) {
        return name.includes('v-')

    }

    /*
    * 核心的方法
    * */

    //第4步
    compileElement(node) {
        // 带v-model v-text
        let attrs = node.attributes;  // 取出节点中的属性 { 0:type, 1: v-model....}
        Array.from(attrs).forEach(attr => {
            //console.log(attr.name, attr.value);
            // 判断属性名字是不是包含 v-
            let attrName = attr.name;   // v-model
            if (this.isDirective(attrName)) {
                // 取到对应的值 放到节点中
                let expr = attr.value;
                //let type = attrName.slice(2)
                let [, type] = attrName.split('-')
                // node vm.$data expr   // v-model v-text v-html
                //
                //CompileUtil['modelUpdater']
                CompileUtil[type](node, this.vm, expr)

            }
        })
    }

    //第5步
    compileText(node) {
        //  带 {{addf}}
        let expr = node.textContent;  // 取文本中的内容
        //console.log(text);
        let reg = /\{\{([^}]+)\}\}/g;  //{{a}} {{b}}
        if (reg.test(expr)) {
            //node this.vm.$data text
            CompileUtil['text'](node, this.vm, expr)
        }

    }

    //第3步
    compile(fragment) {
        // 需要递归
        let childNodes = fragment.childNodes;
        //console.log(childNodes);
        Array.from(childNodes).forEach(node => {
            // 节点是不是元素节点
            if (this.isElementNode(node)) {
                // 是元素节点 还需要深入的检查  (递归)
                //console.log('element', node);
                // 这里需要编译元素
                this.compileElement(node)
                this.compile(node)

            } else {
                // 文本节点
                //console.log('text', node);
                this.compileText(node)
            }
        })
    }

    // 第2步
    nodeToFragment(el) {    // 需要将el中的内容全部放入内存中
        // 文档碎片 内存中的 dom 节点
        let fragment = document.createDocumentFragment(); // createDocumentFragment不会造成页面的重绘重渲染

        let firstChild;
        // el.firstChild有为空的时候
        while (firstChild = el.firstChild) {
            fragment.appendChild(firstChild)
        }
        return fragment; // 内存中的节点
    }
}

// 第6步
CompileUtil = {
    getVal(vm, expr) {  // 获取实例上对应的数据
        expr = expr.split('.')   // [a,v,c,s,a]
        console.log(expr);
        return expr.reduce((prev, next) => {   // vm.$data.a
            return prev[next]
        }, vm.$data)
    },
    getTextVal(vm, expr) {  // 获取编译后的文本结果
        return expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
            console.log(arguments[1]);
            return this.getVal(vm, arguments[1])
        })
    },
    text(node, vm, expr) {// 文本处理
        let updateFn = this.updater['textUpdater'];
        // "message.a" => [message,a]  vm.$data.message.a
        let value = this.getTextVal(vm, expr)
        // {{a}} {{b}}
        expr.replace(/\{\{([^}]+)\}\}/g, (...arguments) => {
            new Watcher(vm, arguments[1], () => {
                // 如果数据变化了 文本节点需要重新获取依赖的数据 更新文本中的内容
                updateFn && updateFn(node, this.getTextVal(vm, expr))
            })
        })
        updateFn && updateFn(node, value)
    },
    setVAl(vm, expr, value) {// [message, a]
        expr = expr.split('.');
        return expr.reduce((prev, next, currentIndex) => {
            if(currentIndex === expr.length - 1){
                return prev[next] = value;
            }
            return prev[next]
        }, vm.$data)
    },
    model(node, vm, expr) { // 输入框处理
        let updateFn = this.updater['modelUpdater'];
        // 这里应该加一个监控  数据变化了  应该调用这个watch的callback
        // 最后写
        new Watcher(vm, expr, (newValue) => {
            // 当值变化后 会调用cb  将新的值传递过来
            updateFn && updateFn(node, this.getVal(vm, expr));
        });
        node.addEventListener('input', (e) => {
            let newValue = e.target.value;
            this.setVAl(vm, expr, newValue)
        })
        updateFn && updateFn(node, this.getVal(vm, expr));
    },
    updater: {
        // 文本更新
        textUpdater(node, value) {
            node.textContent = value
        },
        // 输入框更新
        modelUpdater(node, value) {
            node.value = value;
        }
    }
}