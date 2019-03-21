function diff(oldTree, newTree) {
    let patches = {}
    let index = 0
    // 递归树 比较后的结果放到补丁包中
    walk(oldTree, newTree, index, patches)
    return patches
}
function diffAttr(oldAttrs, newAttrs) {
    let patch = {};
    // 判断老的属性 中和新的属性的关系
    for (let key in oldAttrs) {
        if(oldAttrs[key] !== newAttrs[key]){
            patch[key] = newAttrs[key]  // 有可能是 undefined
        }
    }
    for(let key in newAttrs){
        // 老节点没有新节点的属性
        if(!oldAttrs.hasOwnProperty(key)){
            patch[key] = newAttrs[key]
        }
    }
    return patch
}
const ATTRS = 'ATTRS';
const TEXT = 'TEXT';
const REMOVE = 'REMOVE';
const REPLACE = 'replace';
let Index = 0;
function diffChildren(oldChildren, newChildren, index, patches) {
    // 比较老的第一个 和 新的第一个
    oldChildren.forEach((child, idx) => {
        // 索引不应该是 index 了
        // index 每次传递给walk时 index 是递增的, 所有的人都基于一个序号来实现
        walk(child, newChildren[idx], ++Index, patches)
    })
}
function isString(node) {
    return Object.prototype.toString.call(node) === '[object String]';
}
// index 被私有化到了 walk 作用域内
function walk(oldNode, newNode, index, patches) {
    console.log(oldNode, newNode);
    let currentPatch = [];   // 每个元素都有一个补丁对象
    if(!newNode) {
        currentPatch.push({type:REMOVE, text: index})
    }else if(isString(oldNode) && isString(newNode)) {// 判断文本是否一致
        if(oldNode !== newNode) {
            currentPatch.push({type:TEXT, text: newNode})
        }
    }else if(oldNode.type === newNode.type) {  // 类型相同 比较属性
        // 比较属性是否有更改
        let attrs = diffAttr(oldNode.props, newNode.props)
        //console.log(attrs);
        if(Object.keys(attrs).length > 0) {
            currentPatch.push({type: ATTRS, attrs})
        }
        // 如果有子节点 遍历子节点
        diffChildren(oldNode.children, newNode.children, index, patches)
    }else {
        // 说明节点被替换了
        currentPatch.push({type: REPLACE, newNode})
    }
    if(currentPatch.length > 0) {
        // 当前元素确实有补丁
        // 将元素 和 补丁对应起来 放到大补丁包中
        patches[index] = currentPatch;
        console.log(patches);
    }
}
export default diff;

/*
*规则
* 1. 当节点类型相同时,去看一下属性是否相同，产生一个属性的补丁包
* {type: 'ATTRS'， attrs{class:'list-group'}}
*
* 新的dom节点不存在{type:'REMOVE',index:xxx}
* 节点类型 不相同 直接采用替换模式 {type: 'REPLACE', newNode:newNode}
*
* 文本  {type:'TEXT': text:1}
* 2.
* */