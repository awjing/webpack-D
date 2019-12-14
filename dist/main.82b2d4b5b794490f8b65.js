(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
// import './style.css'
// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn
// btn.onclick = function () {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }
// // css loader底层已经实现HMR，不需要手动实现
// // 使用vue，vue底层也已经实现HMR
// // 实现HMR（引入第三方未实现HMR相关的，需要手动实现HMR）
// if (module.hot) {
//   module.hot.accept('./number', () => {
//     document.body.removeChild(document.getElementById('number'))
//     number()
//   })
// }
// import "@babel/polyfill";
// const arr = [
//   new Promise(() => {}),
//   new Promise(() => {})
// ]
// arr.map(item => {
//   console.log(item)
// })
// Tree Shaking只支持 ES Module模块的引入方式（import）
// 不支持require（import静态、require动态）
// import { add } from './math.js'
// add(2, 3)
// Code Splitting 
// 代码分割，和webpack无关
// webpack中实现代码分割，两种方式
// 1、同步代码：只需要在webpack.common.js做optimization的配置即可
// 2、异步代码（import）: 异步代码，无需做任何配置，会自动进行代码分割
//同步方式
// import _ from 'lodash'
// var element = document.createElement('div')
// element.innerHTML = _.join(['wang', 'jing'], '-')
// document.body.appendChild(element)
// 异步方式
// async function getComponent () {
//   const {default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
//   const element = document.createElement('div')
//   element.innerHTML = _.join(['wang', 'jing'], '-')
//   return element
// }
// document.addEventListener('click', () => {
//   getComponent().then(element => {
//     document.body.appendChild(element)
//   })
// })
// import test from './test.js'
// console.log(test.name)
// import './style.css'
// import './style1.css'
// console.log('fgh')
// import _ from 'lodash'
// import $ from 'jquery'
// import { ui } from './jquery.ui.js'
// ui()
// const dom = $('<div>')
// dom.html(_.join(['wang', 'jing'], '--'))
// $('body').append(dom)
// console.log('helloword')
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js')
//     .then(egistration => {
//       console.log('service-worker register')
//     }).catch(error => {
//       console.log('service-worker register error')
//     })
//   })
// }
// import axios from 'axios'
// axios.get('/react/api/header.json').then((res) => {
//   console.log(res)
// })
// webpack性能优化  resolve的配置




class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.join(['This', 'is', 'App'], ' ')));
  }

}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));

/***/ })

},[[4,1,2]]]);