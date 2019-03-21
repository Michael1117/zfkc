// 虚拟DOM 元素的类
class Element {
    constructor(type, props, children){
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

// 设置属性
function setAttr(node, key, value) {
    switch (key) {
        case 'value': // node 是一个input 或者 textarea
            if(node.tagName.toUpperCase() === 'INPUT' ||
                node.tagName.toUpperCase() === 'TEXTAREA'){
                node.value = value
            }else {
                node.setAttribute(key, value)
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(key, value)
            break;
    }
}

// 返回虚拟节点  返回object
function createElement(type, props, children) {
    return new Element(type, props, children);

}


// render 方法可以将 vnode 转化为真实 dom

function render(eleObj) {
    let el = document.createElement(eleObj.type)
    //eleObj.type
    for (let key in eleObj.props){
        // 设置属性的方法
        setAttr(el, key, eleObj.props[key])
    }
    // 遍历子元素  如果是虚拟dom继续渲染， 不是就代表是文本节点
    eleObj.children.forEach(child => {
        child = (child instanceof Element) ? render(child) :
            document.createTextNode(child);

        el.appendChild(child)
    })
    return el;
}

// 将元素插入到页面内
function renderDom(el, target) {
    target.appendChild(el)
}
export {createElement,render, Element, renderDom}