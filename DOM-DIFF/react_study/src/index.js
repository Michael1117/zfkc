/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
import {createElement, render , renderDom} from './element'
import diff from './diff';
import patch from './patch'

let virtualDom = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item'},['a']),
    createElement('li', {class: 'item'},['b']),
    createElement('li', {class: 'item'},['c'])
])

let virtualDo2 = createElement('ul', {class: 'list-group'}, [
    createElement('li', {class: 'item'},['1']),
    createElement('li', {class: 'item'},['b']),
    createElement('li', {class: 'item'},['3'])
])

let patchs = diff(virtualDom, virtualDo2)
// 将虚拟dom 转化成为真实dom 渲染到页面上
//let el = render(virtualDom)

//console.log(el);

//renderDom(el, window.root)
//console.log(virtualDom);

// DOM DIFF 比较两个虚拟 DOM 区别 比较两个对象的区别
// dom diff 作用 根据两个虚拟对象创建 出补丁  描述改变的内容  将这个补丁用来更新dom

let el = render(virtualDom);
renderDom(el, window.root);

let patches = diff(virtualDom, virtualDo2);

// 给元素打补丁 重新更新视图

patch(el, patches);


// 问题
// 如果平级元素 有互换 那么导致重新渲染

// 新增节点也不会被更新

// index